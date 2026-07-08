# Changelog

## 0.3.0 (2026-07-08)

### Features

* **api:** retarget the SDK at Hedra API v3 (`https://api.hedra.com/v3`). Resource-grouped
  client (`client.queue`, `client.requests`, `client.models`, `client.keys`,
  `client.tokens`, `client.files`, `client.webhooks`) replaces the flat 0.2.x methods.
  **Breaking.**
* **auth:** standard `Authorization: Bearer <key_id>:<secret>` replaces the `X-API-Key`
  header. `HEDRA_API_KEY` env fallback unchanged.
* **pagination:** `client.requests.list()` returns an async-iterable cursor `Page`.
* **streaming:** `client.requests.stream()` follows a request's progress over SSE.
* **environments:** `HedraEnvironment.Production` (default) and `HedraEnvironment.Staging`.

## 0.1.2 (2024-11-02)

Full Changelog: [v0.0.1-alpha.0...v0.1.2](https://github.com/hedra-labs/hedra-node/compare/v0.0.1-alpha.0...v0.1.2)

### Features

* **api:** update via SDK Studio ([#3](https://github.com/hedra-labs/hedra-node/issues/3)) ([0eb30b1](https://github.com/hedra-labs/hedra-node/commit/0eb30b18edc87c78e12badafa436e38c4918b812))


### Chores

* rebuild project due to codegen change ([c6d33d9](https://github.com/hedra-labs/hedra-node/commit/c6d33d9638eb40e9b1ba94f64f9583151c6fccf2))
* rebuild project due to codegen change ([4b37fb5](https://github.com/hedra-labs/hedra-node/commit/4b37fb51c9daef7d154b4dfa3e0660af64e38d19))
* rebuild project due to codegen change ([12f357a](https://github.com/hedra-labs/hedra-node/commit/12f357ac9c8e1ec675baa521b05bc688d0e0534f))
* rebuild project due to codegen change ([44141f2](https://github.com/hedra-labs/hedra-node/commit/44141f2c0896dd9242ecbe64972e4d1c50c811fe))
* update SDK settings ([#1](https://github.com/hedra-labs/hedra-node/issues/1)) ([fc1393f](https://github.com/hedra-labs/hedra-node/commit/fc1393f50aad3ce7800e4f43339669ec516223cb))
