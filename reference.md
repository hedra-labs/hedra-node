# Reference

Compact reference for `hedra-node` (API v3). Hand-maintained: local `fern generate`
does not emit this file — update it alongside the API surface. All methods return
`core.HttpResponsePromise<T>` (await it for `T`, or call `.withRawResponse()`), and
accept an optional trailing `requestOptions`.

## Queue

### `client.queue.submit(model, request) -> Hedra.SubmitResponse`

`POST /queue/{model}` — submit a generation job.

```typescript
const ack = await client.queue.submit("kling-o3-pro", {
    input: { prompt: "a fox sprinting across fresh snow", aspect_ratio: "16:9" },
    webhook: "https://example.com/hook", // optional
    idempotency_key: "my-key",           // optional
    priority: "normal",                  // optional
});
```

## Requests

### `client.requests.list(request?) -> core.Page<Hedra.RequestSummary>`

`GET /requests` — list past requests; cursor-paginated, async-iterable.

```typescript
const page = await client.requests.list({ limit: 50 });
for await (const req of page) console.log(req.request_id, req.status);
```

### `client.requests.get(request_id) -> Hedra.ResultResponse`

`GET /requests/{request_id}` — fetch the result envelope (`outputs`, `error`, `metrics`).

### `client.requests.getStatus(request_id, request?) -> Hedra.StatusResponse`

`GET /requests/{request_id}/status` — poll progress; pass `{ logs: true }` for logs.

### `client.requests.stream(request_id, request?) -> unknown`

`GET /requests/{request_id}/stream` — Server-Sent Events progress stream; pass
`{ last_event_id }` to resume.

## Models

### `client.models.list(request?) -> Hedra.ModelListResponse`

`GET /models` — the model catalog; filter with `{ type: "video" }`.

### `client.models.get(model) -> Hedra.ModelDetail`

`GET /models/{model}` — family or variant detail (`input_schema`, `routing`, `variants`).

### `client.models.listVoices(model) -> Hedra.VoiceListResponse`

`GET /models/{model}/voices` — TTS voice catalog for a model.

### `client.models.getOpenapi(model) -> Record<string, unknown>`

`GET /models/{model}/openapi.json` — per-model OpenAPI spec.

### `client.models.estimate(model, request?) -> Hedra.EstimateResponse`

`POST /models/{model}/estimate` — cost/ETA for an input without queuing.

```typescript
const est = await client.models.estimate("kling-o3-pro", {
    input: { prompt: "a fox" },
});
```

## Keys

### `client.keys.create(request?) -> Hedra.KeyCreateResponse`

`POST /keys` — mint an API key (`name`, `scopes`, `kind`, `workspace_id`, `expires_at`).
The secret is returned once.

### `client.keys.list() -> Hedra.KeyListResponse`

`GET /keys` — list keys (no secrets).

### `client.keys.rotate(key_id) -> Hedra.KeyRotateResponse`

`POST /keys/{key_id}/rotate` — rotate a key's secret.

### `client.keys.revoke(key_id) -> void`

`DELETE /keys/{key_id}` — revoke a key.

## Tokens

### `client.tokens.create(request?) -> Hedra.TokenCreateResponse`

`POST /tokens` — mint an ephemeral browser token (inherits the minting key's scopes).

## Files

### `client.files.upload(request) -> Hedra.FileUploadResponse`

`POST /files` — upload a file for reference inputs (`image_url` / `audio_url` /
`video_url` accept the returned URL).

```typescript
import * as fs from "fs";

const uploaded = await client.files.upload({
    file: fs.createReadStream("/path/to/image.png"),
});
```

## Webhooks

### `client.webhooks.getPublicKey() -> Hedra.WebhookPublicKey`

`GET /webhooks/public-key` — the ed25519 public key for verifying webhook signatures.
