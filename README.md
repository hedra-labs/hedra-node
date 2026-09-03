# Hedra TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=Hedra%2FTypeScript)
[![npm shield](https://img.shields.io/npm/v/@hedra/sdk)](https://www.npmjs.com/package/@hedra/sdk)

The Hedra TypeScript library provides convenient access to the Hedra API v3 from TypeScript and
JavaScript.

## Table of Contents

- [Installation](#installation)
- [Reference](#reference)
- [Usage](#usage)
- [Authentication](#authentication)
- [Custom base URL](#custom-base-url)
- [Resources](#resources)
- [Request and Response Types](#request-and-response-types)
- [Streaming](#streaming)
- [Pagination](#pagination)
- [Exception Handling](#exception-handling)
- [File Uploads](#file-uploads)
- [Advanced](#advanced)
  - [Additional Headers](#additional-headers)
  - [Additional Query String Parameters](#additional-query-string-parameters)
  - [Retries](#retries)
  - [Timeouts](#timeouts)
  - [Aborting Requests](#aborting-requests)
  - [Access Raw Response Data](#access-raw-response-data)
  - [Spec Version Header](#spec-version-header)
  - [Logging](#logging)
  - [Custom Fetch](#custom-fetch)
  - [Runtime Compatibility](#runtime-compatibility)
- [Contributing](#contributing)

## Installation

```sh
npm i -s @hedra/sdk
```

## Reference

A full reference for this library is available [here](./reference.md).

## Usage

Instantiate and use the client with the following:

```typescript
import { HedraClient } from "@hedra/sdk";

const client = new HedraClient({ apiKey: "YOUR_API_KEY" });

const submitted = await client.jobs.submitMinimaxH3({
    input: {
        prompt: "a fox sprinting across fresh snow",
        aspect_ratio: "16:9",
        resolution: "768p",
        duration_ms: 6000,
    },
});

// Poll until the job reaches a terminal state, then fetch the result envelope.
let status = await client.jobs.getStatus(submitted.job_id);
while (status.status === "IN_QUEUE" || status.status === "IN_PROGRESS") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    status = await client.jobs.getStatus(submitted.job_id);
}

const result = await client.jobs.get(submitted.job_id);
for (const output of result.outputs ?? []) {
    console.log(output.url);
}
```

Every model has its own submit method — `submitMinimaxH3`, `submitKlingO3`, `submitVeo3`,
`submitNanoBanana` and so on — each taking the `input` that model actually accepts, checked at
compile time. The [reference](./reference.md) lists all of them.

To run a model by its public id instead, with an untyped `input` that the API validates at submit
time, use `client.jobs.submit(model, { input })`. This is the call to reach for when the model is
not known ahead of time, or when a client generated before a model shipped needs to run it:

```typescript
const submitted = await client.jobs.submit("minimax-h3", {
    input: {
        prompt: "a fox sprinting across fresh snow",
        aspect_ratio: "16:9",
        resolution: "768p",
        duration_ms: 6000,
    },
});
```

Every submit body also accepts two optional fields: `webhook`, a URL that receives a signed
completion webhook, and `idempotency_key`, which replays the original acknowledgement for a
retried submit instead of enqueueing a duplicate job.

Instead of polling you can follow the job over server-sent events; see [Streaming](#streaming).

## Authentication

The client authenticates with `Authorization: Bearer <api key>`; an API key is the
`<key_id>:<secret>` credential from the Hedra console. The API key can also be provided via the
`HEDRA_API_KEY` environment variable, in which case `apiKey` may be omitted:

```typescript
import { HedraClient } from "@hedra/sdk";

// Reads HEDRA_API_KEY from the environment
const client = new HedraClient();
```

Ephemeral tokens minted with `client.tokens.create(...)` are valid Bearer credentials until they
expire; pass the returned `token` as `apiKey` to authenticate with one.
To take over header construction entirely, pass `auth` — either `false` to send no credentials,
or a function returning the headers to attach:

```typescript
import { HedraClient } from "@hedra/sdk";

const client = new HedraClient({
    auth: async () => ({ headers: { Authorization: `Bearer ${await fetchTokenSomehow()}` } }),
});
```

## Custom base URL

The client targets `https://api.hedra.com/v3` (`HedraEnvironment.Production`). Pass a URL as
`environment` to point elsewhere (e.g. a mock server in tests):

```typescript
import { HedraClient } from "@hedra/sdk";

const client = new HedraClient({
    environment: "http://localhost:8000/v3",
});
```

## Resources

The client exposes one sub-client per API resource:

| Sub-client | What it covers |
| --- | --- |
| `client.jobs` | Submit generation jobs (typed per model, or by id), poll status, fetch results, tail logs, stream progress, list history. |
| `client.models` | Browse the model catalog and each model's input schema, list voices, estimate cost, fetch the OpenAPI document. |
| `client.files` | Upload media to reference from a submit. |
| `client.keys` | List, create, rotate and revoke API keys. |
| `client.tokens` | Mint ephemeral Bearer tokens that expire on a schedule, for clients that should not hold a long-lived key. |
| `client.billing` | Balance, usage and transaction history. |
| `client.webhooks` | Manage and test the account's default completion webhook, list and redeliver deliveries, fetch the signing public key. |
| `client.logDrains` | Manage log drains that batch-forward job logs to an endpoint you own. |

```typescript
const catalog = await client.models.list({ modality: "video" });
const detail = await client.models.get("minimax-h3");
const balance = await client.billing.getBalance();
```

Each resource is also published as a package subpath — `@hedra/sdk/jobs`, `@hedra/sdk/models`,
`@hedra/sdk/files`, `@hedra/sdk/keys`, `@hedra/sdk/tokens`, `@hedra/sdk/billing`,
`@hedra/sdk/webhooks`, `@hedra/sdk/logDrains` — exporting that resource's client class and
request types on their own.

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Hedra } from "@hedra/sdk";

const input: Hedra.InputMinimaxH3 = {
    prompt: "a fox sprinting across fresh snow",
    aspect_ratio: "16:9",
    resolution: "768p",
    duration_ms: 6000,
};

const request: Hedra.SubmitBodyMinimaxH3 = { input };
```

Enum-valued fields are exported as `as const` objects alongside their types, so
`Hedra.InputMinimaxH3.Resolution.SevenHundredSixtyEightP` and the literal `"768p"` are
interchangeable. Response envelopes are typed the same way: `Hedra.SubmitResponse`,
`Hedra.StatusResponse`, `Hedra.ResultResponse`, `Hedra.OutputItem`, and `Hedra.JobStatus`
(`"IN_QUEUE" | "IN_PROGRESS" | "COMPLETED" | "FAILED"`).

## Streaming

`client.jobs.stream(job_id)` follows a job over server-sent events instead of polling. It resolves
to an async iterable that yields a `StatusResponse` for every `status` frame and a `JobLogItem` for
every `log` frame, and ends once the job reaches a terminal state:

```typescript
// submitted is the SubmitResponse returned by any submit call
const stream = await client.jobs.stream(submitted.job_id);
for await (const event of stream) {
    if ("status" in event) {
        console.log(event.status, event.progress);
    } else {
        console.log(event.level, event.message);
    }
}
```

A dropped connection is resumed automatically from the last event id. Tune that with the `stream`
option, on the client or per request:

```typescript
const client = new HedraClient({
    stream: { reconnectionEnabled: true, maxReconnectionAttempts: 5 },
});

const stream = await client.jobs.stream(submitted.job_id, {}, {
    stream: { reconnectionEnabled: false },
});
```

## Pagination

Paginated requests return a `Page` that can be iterated asynchronously; it fetches cursor pages
lazily as you iterate:

```typescript
const page = await client.jobs.list({ limit: 50 });
for await (const job of page) {
    console.log(job.job_id, job.status);
}
```

You can also iterate page by page and access the typed response for each one:

```typescript
let page = await client.jobs.list({ limit: 50 });
while (true) {
    console.log(page.response); // the typed JobListResponse for this page
    for (const job of page.data) {
        console.log(job.job_id);
    }
    if (!page.hasNextPage()) break;
    page = await page.getNextPage();
}
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of `HedraError` is
thrown. Each documented status has its own class under the `Hedra` namespace — `BadRequestError`,
`UnauthorizedError`, `PaymentRequiredError`, `ForbiddenError`, `NotFoundError`,
`UnprocessableEntityError`, `TooManyRequestsError` and `InternalServerError` — with a typed
`body`. A request that exceeds its timeout throws `HedraTimeoutError`.

```typescript
import { Hedra, HedraError, HedraTimeoutError } from "@hedra/sdk";

try {
    await client.jobs.get("job_does_not_exist");
} catch (err) {
    if (err instanceof Hedra.NotFoundError) {
        console.log(err.body); // typed Hedra.ErrorResponse
    } else if (err instanceof HedraTimeoutError) {
        console.log("timed out", err.cause);
    } else if (err instanceof HedraError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
        console.log(err.requestId); // the response's x-request-id, if any
        console.log(err.rawResponse);
    }
}
```

## File Uploads

Media inputs (`start_image`, `end_image`, `images`, `audio`, `video`, …) take either a public URL or
a file you uploaded first. `client.files.upload` stores the bytes and returns a presigned URL that is
the file's handle for the next hour; pass it back verbatim as a `url` source:

```typescript
import * as fs from "fs";
import { HedraClient } from "@hedra/sdk";

const client = new HedraClient({ apiKey: "YOUR_API_KEY" });

const upload = await client.files.upload({
    file: fs.createReadStream("frame.png"),
});

await client.jobs.submitMinimaxH3({
    input: {
        prompt: "the fox turns toward the camera",
        resolution: "768p",
        duration_ms: 6000,
        start_image: { source: "url", url: upload.url },
    },
});
```

A completed job's outputs carry an `asset_id`; pass `{ source: "asset", asset_id }` instead of a
URL to reuse an output as the input to a later job.

The client accepts a variety of types for file upload parameters:
* Stream types: `fs.ReadStream`, `stream.Readable`, and `ReadableStream`
* Buffered types: `Buffer`, `Blob`, `File`, `ArrayBuffer`, `ArrayBufferView`, and `Uint8Array`

### Metadata

You can configure metadata when uploading a file:
```typescript
import { createReadStream } from "fs";
import { Uploadable } from "@hedra/sdk";

const file: Uploadable.WithMetadata = {
    data: createReadStream("path/to/file"),
    filename: "my-file",       // optional
    contentType: "audio/mpeg", // optional
    contentLength: 1949,       // optional
};
```

Alternatively, you can upload a file directly from a file path:
```typescript
import { Uploadable } from "@hedra/sdk";

const file: Uploadable.FromPath = {
    path: "path/to/file",
    filename: "my-file",        // optional
    contentType: "audio/mpeg",  // optional
    contentLength: 1949,        // optional
};
```

The metadata is used to set the `Content-Length`, `Content-Type`, and `Content-Disposition` headers. If not provided, the client will attempt to determine them automatically.
For example, `fs.ReadStream` has a `path` property which the SDK uses to retrieve the file size from the filesystem without loading it into memory.


## Advanced

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
import { HedraClient } from "@hedra/sdk";

const client = new HedraClient({
    ...
    headers: {
        'X-Custom-Header': 'custom value'
    }
});

const response = await client.jobs.submitMinimaxH3(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Additional Query String Parameters

If you would like to send additional query string parameters as part of the request, use the `queryParams` request option.

```typescript
const response = await client.jobs.submitMinimaxH3(..., {
    queryParams: {
        'customQueryParamKey': 'custom query param value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retryable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2). A response is retryable when its status is:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) (All server errors, including 500)

A `Retry-After` header is honoured when the server sends one. Use the `maxRetries` option, on the
client or per request, to configure this behavior.

```typescript
const response = await client.jobs.submitMinimaxH3(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.jobs.submitMinimaxH3(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.jobs.submitMinimaxH3(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Access Raw Response Data

The SDK provides access to raw response data, including headers, through the `.withRawResponse()` method.
The `.withRawResponse()` method returns a promise that results to an object with a `data` and a `rawResponse` property.

```typescript
const { data, rawResponse } = await client.jobs.submitMinimaxH3(...).withRawResponse();

console.log(data);
console.log(rawResponse.headers.get("x-request-id"));
```

### Spec Version Header

Every request carries an `X-Hedra-Spec-Version` header naming the OpenAPI spec version this client
was generated from, so the server can tell which generation of the API a caller was built against.
It is sent automatically; the `specVersion` option that backs it is typed to the pinned version, so
there is nothing to configure.

### Logging

The SDK supports logging. You can configure the logger by passing in a `logging` object to the client options.

```typescript
import { HedraClient, logging } from "@hedra/sdk";

const client = new HedraClient({
    ...
    logging: {
        level: logging.LogLevel.Debug, // defaults to logging.LogLevel.Info
        logger: new logging.ConsoleLogger(), // defaults to ConsoleLogger
        silent: false, // defaults to true, set to false to enable logging
    }
});
```
The `logging` object can have the following properties:
- `level`: The log level to use. Defaults to `logging.LogLevel.Info`.
- `logger`: The logger to use. Defaults to a `logging.ConsoleLogger`.
- `silent`: Whether to silence the logger. Defaults to `true`.

The `level` property can be one of the following values:
- `logging.LogLevel.Debug`
- `logging.LogLevel.Info`
- `logging.LogLevel.Warn`
- `logging.LogLevel.Error`

To provide a custom logger, you can pass in an object that implements the `logging.ILogger` interface.

<details>
<summary>Custom logger examples</summary>

Here's an example using the popular `winston` logging library.
```ts
import winston from 'winston';

const winstonLogger = winston.createLogger({...});

const logger: logging.ILogger = {
    debug: (msg, ...args) => winstonLogger.debug(msg, ...args),
    info: (msg, ...args) => winstonLogger.info(msg, ...args),
    warn: (msg, ...args) => winstonLogger.warn(msg, ...args),
    error: (msg, ...args) => winstonLogger.error(msg, ...args),
};
```

Here's an example using the popular `pino` logging library.

```ts
import pino from 'pino';

const pinoLogger = pino({...});

const logger: logging.ILogger = {
  debug: (msg, ...args) => pinoLogger.debug(args, msg),
  info: (msg, ...args) => pinoLogger.info(args, msg),
  warn: (msg, ...args) => pinoLogger.warn(args, msg),
  error: (msg, ...args) => pinoLogger.error(args, msg),
};
```
</details>


### Custom Fetch

The SDK provides a low-level `fetch` method for making custom HTTP requests while still
benefiting from SDK-level configuration like authentication, retries, timeouts, and logging.
This is useful for calling API endpoints not yet supported in the SDK.

Construct the client with an explicit `environment` (or `baseUrl`) when you use it. Unlike
the resource clients, `client.fetch` does not fall back to the default production URL, so on
a default-constructed client a relative path reaches `fetch()` unresolved and throws
`TypeError: Failed to parse URL`.

```typescript
import { HedraClient, HedraEnvironment } from "@hedra/sdk";

const client = new HedraClient({
    apiKey: "YOUR_API_KEY",
    environment: HedraEnvironment.Production,
});

const response = await client.fetch("/some/unsupported/endpoint", {
    method: "GET",
}, {
    timeoutInSeconds: 30,
    maxRetries: 3,
    headers: {
        "X-Custom-Header": "custom-value",
    },
});

const data = await response.json();
```

Prefer a relative path against a configured `environment`, as above — it is the one form
that both resolves and carries the `Authorization` header on every generator version.
Credentials are not guaranteed to be attached to an absolute URL that points somewhere
other than your configured base.

### Runtime Compatibility

The SDK works in the following runtimes:

- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
