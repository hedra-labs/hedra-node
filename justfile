# hedra-node task runner.
#
# Releasing this repo is one GitHub Release. Publishing it is the whole
# trigger: publish-npm.yml derives the version from the release tag, builds
# from the commit the Release targets and publishes @hedra/sdk to npm -- which
# never accepts the same version twice. Two things follow that are easy to get
# wrong. A pushed tag on its own ships nothing. And a Release published on an
# `X.Y.Z-dev` version does not skip anything: it publishes that `-dev` to npm
# for real.
#
# The version is normally stamped by the generator, not chosen here. Between
# releases main carries `X.Y.Z-dev` ("a bump is pending"); the generator's
# release workflow strips the suffix, regenerates at that number, lands the PR
# through autoland and publishes the Release itself. The `version` recipes
# cover the one case that workflow cannot see: a change to a hand-owned file
# (README.md, anything under .fernignore) that no regeneration will ever
# compute a bump for. Bump by hand, land it, then release.
#
# Everything under the `release` group is that knowledge, made executable.
# `just release-check` writes nothing and can be run at any time.

set shell := ["bash", "-euo", "pipefail", "-c"]

remote := "origin"
branch := "main"
package := "@hedra/sdk"
manifest := "package.json"
constant := "src/version.ts"

# Required status checks on `main` -- keep in sync with branch protection.
required_checks := "compile test regen-shape"

# The environment publish-npm.yml runs under. A required-reviewers rule on it
# is the only approval between a published Release and a live npm publish, and
# GitHub creates the environment WITHOUT one if it does not exist.
publish_env := "npm-publish"

[private]
default:
    @just --list --unsorted

# ---------------------------------------------------------------- version ---

# Print the release version (package.json's "version").
[group('version')]
version:
    @jq -r .version {{ manifest }}

# The two version-bearing files: package.json is what a regeneration pins its
# --version to, src/version.ts is the runtime SDK_VERSION the generator stamps
# from it (and the user-agent reports). regen-shape fails a PR where they
# disagree, and publish-npm.yml only *warns* when the constant lags the tag --
# so a stale constant reaches npm.
#
# Only `X.Y.Z` and `X.Y.Z-dev` are accepted: those are the two shapes the
# generator's version computation reads back, and anything else makes it
# refuse.
[doc('Force a version into package.json and src/version.ts together.')]
[group('version')]
set-version v:
    #!/usr/bin/env bash
    set -euo pipefail
    v="{{ v }}"
    re='^[0-9]+\.[0-9]+\.[0-9]+(-dev)?$'
    if ! [[ "$v" =~ $re ]]; then
        echo "'$v' is not X.Y.Z or X.Y.Z-dev" >&2
        exit 1
    fi

    old="$(jq -r .version {{ manifest }})"
    npm version --no-git-tag-version --allow-same-version "$v" >/dev/null
    if [ "$old" = "$v" ]; then
        echo "{{ manifest }}: version = \"$v\" (unchanged)"
    else
        echo "{{ manifest }}: version = \"$old\" -> \"$v\""
    fi

    old="$(sed -n 's/.*SDK_VERSION[[:space:]]*=[[:space:]]*"\([^"]*\)".*/\1/p' {{ constant }} | head -1)"
    if [ -z "$old" ]; then
        echo "{{ constant }}: could not find SDK_VERSION" >&2
        exit 1
    fi
    sed "s/\(SDK_VERSION[[:space:]]*=[[:space:]]*\)\"[^\"]*\"/\1\"$v\"/" {{ constant }} > {{ constant }}.new
    mv {{ constant }}.new {{ constant }}
    if [ "$old" = "$v" ]; then
        echo "{{ constant }}: SDK_VERSION = \"$v\" (unchanged)"
    else
        echo "{{ constant }}: SDK_VERSION = \"$old\" -> \"$v\""
    fi

# Compute the next `X.Y.Z-dev` from the current version and write it, by the
# same minimal-bump rule the generator's version computation applies. A
# released `X.Y.Z` pends nothing, so any level moves it. An `X.Y.Z-dev` already
# pends a class, read back from its shape (`X.0.0-dev` major, `X.Y.0-dev`
# minor, otherwise patch): a level at or below that class is absorbed and the
# number stays put; a higher one moves the stripped base. From a released
# 4.0.1: +patch 4.0.2-dev, +minor 4.1.0-dev, +major 5.0.0-dev; then from
# 4.0.2-dev, +patch is absorbed and +minor gives 4.1.0-dev.
#
# For a hand-owned change only. A regeneration reads the pending class back
# from the same shape, so a hand bump composes with whatever it computes next.
# Writes the files and stops: the commit is yours, so it can ride with the
# change it is for.
[doc('Move the version to the next X.Y.Z-dev for a patch, minor or major change.')]
[group('version')]
bump level:
    #!/usr/bin/env bash
    set -euo pipefail
    current="$(jq -r .version {{ manifest }})"
    base="${current%-dev}"
    re='^[0-9]+\.[0-9]+\.[0-9]+$'
    if ! [[ "$base" =~ $re ]]; then
        echo "{{ manifest }} carries '$current', which is not X.Y.Z or X.Y.Z-dev" >&2
        exit 1
    fi
    IFS=. read -r major minor patch <<<"$base"

    # The class already pending, as a rank; 0 for a released version.
    if [ "$current" = "$base" ]; then
        pending=0
    elif [ "$minor" -eq 0 ] && [ "$patch" -eq 0 ]; then
        pending=3
    elif [ "$patch" -eq 0 ]; then
        pending=2
    else
        pending=1
    fi

    case "{{ level }}" in
        patch) rank=1; next="$major.$minor.$((patch + 1))" ;;
        minor) rank=2; next="$major.$((minor + 1)).0" ;;
        major) rank=3; next="$((major + 1)).0.0" ;;
        *) echo "level must be patch, minor or major, not '{{ level }}'" >&2; exit 1 ;;
    esac

    if [ "$rank" -le "$pending" ]; then
        echo "$current already pends a bump that covers a {{ level }} change; nothing to move"
        exit 0
    fi
    just set-version "$next-dev"
    echo "next: git commit -am 'chore(version): bump to $next-dev'"

# --------------------------------------------------------------------- ci ---

# The required checks are compile (build + lint), test and regen-shape. The
# shape check only fires on regeneration branches, but its version rule holds
# everywhere and is the cheapest thing here, so it runs first. config-syntax (a
# JSON/YAML/shell parse of .github/) is not mirrored: it is not required, and
# it is an inline Python program that lives in the workflow alone.
[doc('Everything the required checks run, in their order.')]
[group('ci')]
ci: check-versions install build lint test

[doc('Install dependencies against the committed lockfile.')]
[group('ci')]
install:
    pnpm install --frozen-lockfile

# package.json and src/version.ts carry the same string (regen-shape's rule).
[group('ci')]
check-versions:
    #!/usr/bin/env bash
    set -euo pipefail
    manifest="$(jq -r .version {{ manifest }})"
    constant="$(sed -n 's/.*SDK_VERSION[[:space:]]*=[[:space:]]*"\([^"]*\)".*/\1/p' {{ constant }} | head -1)"
    if [ -z "$constant" ]; then
        echo "could not read SDK_VERSION from {{ constant }}" >&2
        exit 1
    fi
    if [ "$manifest" != "$constant" ]; then
        echo "{{ manifest }} says '$manifest', {{ constant }} says '$constant'" >&2
        echo "hint: just set-version $manifest" >&2
        exit 1
    fi
    echo "{{ manifest }} and {{ constant }} agree on $manifest"

[doc('Compile the CommonJS and ESM builds.')]
[group('ci')]
build:
    pnpm build

# biome.json scopes this to hand-maintained files; generated code is excluded.
[group('ci')]
lint:
    pnpm check

# CI=true is what keeps vitest from opening its watcher in a terminal; the
# runner sets it, a shell does not.
[doc('Run the test suite once, the way CI does.')]
[group('ci')]
test:
    CI=true pnpm test

# ---------------------------------------------------------------- release ---

# Read-only preflight. Every condition that must hold before a Release is
# published.
[doc('Read-only preflight: every condition that must hold before a Release is published.')]
[group('release')]
release-check:
    #!/usr/bin/env bash
    set -uo pipefail
    fail=0
    ok()   { printf '  \033[32mok\033[0m    %s\n' "$*"; }
    bad()  { printf '  \033[31mFAIL\033[0m  %s\n' "$*"; fail=1; }
    warn() { printf '  \033[33mwarn\033[0m  %s\n' "$*"; }

    version="$(jq -r .version {{ manifest }})"
    tag="v$version"
    echo "preflight for $tag"

    # 0. Between releases main carries X.Y.Z-dev. publish-npm.yml takes the
    #    version from the tag and accepts any semver pre-release, so a Release
    #    published on a -dev skips nothing: it publishes X.Y.Z-dev to npm,
    #    where it can never be taken back.
    case "$version" in
        *-*) bad "$version is a pre-release -- it would publish to npm as-is; promote it first: just set-version ${version%%-*}" ;;
        *)   ok "$version is not a pre-release" ;;
    esac

    # 1. The Release must name a commit on the released branch. publish-npm.yml
    #    checks out whatever the Release targets, so one cut from a stray
    #    commit ships it.
    head_branch="$(git rev-parse --abbrev-ref HEAD)"
    if [ "$head_branch" = "{{ branch }}" ]; then
        ok "on {{ branch }}"
    else
        bad "on '$head_branch', not {{ branch }}"
    fi

    if git diff --quiet && git diff --cached --quiet; then
        ok "working tree clean"
    else
        bad "working tree dirty -- the Release would not describe what you built"
    fi

    git fetch --quiet {{ remote }} {{ branch }} 2>/dev/null || warn "could not fetch {{ remote }}"
    if [ "$(git rev-parse HEAD)" = "$(git rev-parse {{ remote }}/{{ branch }} 2>/dev/null)" ]; then
        ok "HEAD matches {{ remote }}/{{ branch }}"
    else
        bad "HEAD differs from {{ remote }}/{{ branch }} -- push or pull first"
    fi

    # 2. src/version.ts is what ships. publish-npm.yml rewrites package.json
    #    from the tag inside its own checkout but only warns about the
    #    constant, and the constant is what the user-agent reports.
    constant="$(sed -n 's/.*SDK_VERSION[[:space:]]*=[[:space:]]*"\([^"]*\)".*/\1/p' {{ constant }} | head -1)"
    if [ "$constant" = "$version" ]; then
        ok "{{ constant }} agrees on $version"
    else
        bad "{{ constant }} says '$constant' -- fix with: just set-version $version"
    fi

    # 3. Re-releasing is not a release. The Release would collide with one
    #    that already exists, and npm rejects a republished version.
    if git rev-parse -q --verify "refs/tags/$tag" >/dev/null; then
        bad "local tag $tag already exists"
    else
        ok "local tag $tag is free"
    fi
    if [ -z "$(git ls-remote --tags {{ remote }} "refs/tags/$tag" 2>/dev/null)" ]; then
        ok "remote tag $tag is free"
    else
        bad "$tag already exists on {{ remote }} -- bump the version instead"
    fi
    if command -v gh >/dev/null 2>&1; then
        if gh release view "$tag" >/dev/null 2>&1; then
            bad "Release $tag already exists"
        else
            ok "no Release $tag yet"
        fi
    fi
    if out="$(npm view "{{ package }}@$version" version 2>&1)" && [ -n "$out" ]; then
        bad "{{ package }}@$version is already on npm -- bump the version instead"
    elif grep -q 404 <<<"$out"; then
        ok "{{ package }}@$version is not on npm"
    else
        warn "could not query npm for {{ package }}@$version"
    fi

    # 4. The Release bypasses CI entirely -- publish-npm.yml builds and tests
    #    its checkout but never waits for the required checks, and a Release
    #    is not a push to main. The only moment anyone can notice a red HEAD
    #    is right now.
    if command -v gh >/dev/null 2>&1; then
        sha="$(git rev-parse HEAD)"
        repo="$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null)"
        for check in {{ required_checks }}; do
            concl="$(gh api "repos/$repo/commits/$sha/check-runs" \
                --jq ".check_runs[] | select(.name==\"$check\") | .conclusion" 2>/dev/null | head -1)"
            case "$concl" in
                success) ok "check '$check' green on HEAD" ;;
                "")      bad "check '$check' has not run on HEAD" ;;
                *)       bad "check '$check' is '$concl' on HEAD" ;;
            esac
        done

        # 5. The approval gate publish-npm.yml describes lives in the
        #    environment's settings, not in the workflow, and GitHub creates a
        #    referenced environment without any rule if it is missing. So
        #    whether a human stands between the Release and npm is a fact
        #    about the repo settings, checked here rather than assumed.
        rules="$(gh api "repos/$repo/environments/{{ publish_env }}" \
            --jq '[.protection_rules[]?.type] | join(" ")' 2>/dev/null)" || rules="?"
        if [ "$rules" = "?" ]; then
            warn "could not read the '{{ publish_env }}' environment; a missing one publishes with no approval"
        elif [[ " $rules " == *" required_reviewers "* ]]; then
            ok "'{{ publish_env }}' holds the publish for a reviewer"
        else
            warn "'{{ publish_env }}' has no required reviewers -- publishing $tag ships to npm with no further approval"
        fi

        # 6. An open regeneration PR carries a version computed before this
        #    release. Autoland merges main into it favouring the PR's side, so
        #    landing it afterwards walks main back onto a -dev of a version
        #    that is already on npm. Close it; the next generation recreates
        #    it.
        open_regens="$(gh pr list --state open --json number,headRefName \
            --jq '[.[] | select(.headRefName | startswith("fern-bot/")) | "#\(.number)"] | join(" ")' 2>/dev/null)"
        if [ -z "$open_regens" ]; then
            ok "no open regeneration PRs"
        else
            warn "open regeneration PR(s) $open_regens were computed before this release; close them and let the next generation recreate them"
        fi
    else
        warn "gh not installed; skipped the CI status, publish gate and regeneration checks"
    fi

    echo
    if [ "$fail" -eq 0 ]; then
        echo "ready to release $tag -- run: just release"
    else
        echo "preflight failed; $tag is not safe to publish"
        exit 1
    fi

# The confirmation is inside the body, not a [confirm] attribute: `just`
# prompts for that attribute *before* running dependencies, so the preflight
# would not have gated the prompt. Typing the tag back is deliberate -- the
# publish is irreversible on npm, where a version can never be republished.
#
# Created the way the generator's release workflow creates it: one
# `gh release create` targeting the commit, which makes the tag as a side
# effect. That tag is the version publish-npm.yml publishes.
[doc('Publish the GitHub Release for HEAD. This ships: publish-npm.yml -> npm (@hedra/sdk).')]
[group('release')]
release:
    #!/usr/bin/env bash
    set -euo pipefail
    just release-check
    version="$(jq -r .version {{ manifest }})"
    tag="v$version"
    sha="$(git rev-parse HEAD)"
    spec="$(jq -r '.originGitCommit // empty' .fern/metadata.json 2>/dev/null || true)"
    notes="SDK $version."
    if [ -n "$spec" ]; then
        notes="SDK $version, generated from spec commit $spec."
    fi
    echo
    echo "Publishing $tag creates the tag at ${sha:0:7} and fires publish-npm.yml,"
    echo "which publishes {{ package }}@$version to npm. Unless the preflight"
    echo "above says '{{ publish_env }}' holds it for a reviewer, nothing gates it"
    echo "after this point, and npm versions cannot be republished."
    read -r -p "Type $tag to confirm: " reply
    if [ "$reply" != "$tag" ]; then
        echo "aborted"
        exit 1
    fi
    gh release create "$tag" --target "$sha" --title "$tag" --notes "$notes"
    git fetch --quiet {{ remote }} "refs/tags/$tag:refs/tags/$tag"
    echo "published $tag -- watch it with: just release-watch"

# Follow the publish run the Release kicked off. The run is keyed on the
# Release event, which takes a few seconds to fire.
[doc('Follow the publish run the Release kicked off.')]
[group('release')]
release-watch:
    #!/usr/bin/env bash
    set -euo pipefail
    tag="v$(jq -r .version {{ manifest }})"
    id=""
    for _ in $(seq 1 12); do
        id="$(gh run list --workflow=publish-npm.yml --event release --limit 20 \
            --json databaseId,headBranch --jq ".[] | select(.headBranch==\"$tag\") | .databaseId" | head -1)"
        if [ -n "$id" ]; then
            break
        fi
        sleep 5
    done
    if [ -z "$id" ]; then
        echo "no publish-npm run for $tag yet" >&2
        exit 1
    fi
    gh run watch "$id" --exit-status
    echo "on npm: npm view {{ package }}@${tag#v} version"
