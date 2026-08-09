# Hedra TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=Hedra%2FTypeScript)
[![npm shield](https://img.shields.io/npm/v/hedra-node)](https://www.npmjs.com/package/hedra-node)

The Hedra TypeScript library provides convenient access to the Hedra APIs from TypeScript.

## Table of Contents

- [Installation](#installation)
- [Reference](#reference)
- [Usage](#usage)
- [Custom base URL](#custom-base-url)
- [Request and Response Types](#request-and-response-types)
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
  - [Logging](#logging)
  - [Custom Fetch](#custom-fetch)
  - [Runtime Compatibility](#runtime-compatibility)
- [Contributing](#contributing)

## Installation

```sh
npm i -s hedra-node
```

## Reference

A full reference for this library is available [here](./reference.md).

## Usage

Instantiate and use the client with the following:

```typescript
import { HedraClient } from "hedra-node";

const client = new HedraClient({ apiKey: "YOUR_API_KEY" });

const submitted = await client.jobs.submitKlingO3({
    input: {
        prompt: "a fox sprinting across fresh snow",
        aspect_ratio: "16:9",
        duration_ms: 5000,
        quality: "standard",
    },
});

// Poll until the job reaches a terminal state, then fetch the result envelope.
let status = await client.jobs.getStatus(submitted.job_id);
while (status.status === "IN_QUEUE" || status.status === "IN_PROGRESS") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    status = await client.jobs.getStatus(submitted.job_id);
}

const result = await client.jobs.get(submitted.job_id);
console.log(result.outputs?.[0]?.url);
```

Every model has its own submit method — `submitKlingO3`, `submitVeo3`, `submitNanoBanana`
and so on — each taking the `input` that model actually accepts, checked at compile time.
The [reference](./reference.md) lists all of them.

Instead of polling you can consume the job's server-sent event stream with
`client.jobs.stream(job_id)`.

The client authenticates with `Authorization: Bearer <api key>`; an API key is the
`<key_id>:<secret>` credential from the Hedra console. When `apiKey` is not passed,
it is read from the `HEDRA_API_KEY` environment variable.

## Custom base URL

The client targets `https://api.hedra.com/v3`. Pass a URL as `environment` to point
elsewhere (e.g. a mock server in tests):

```typescript
import { HedraClient } from "hedra-node";

const client = new HedraClient({
    environment: "http://localhost:8000/v3",
});
```

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Hedra } from "hedra-node";

const request: Hedra.SubmitBodyKlingO3 = {
    ...
};
```

## Pagination

`client.jobs.list(...)` returns a `Page` that can be iterated asynchronously; it
fetches cursor pages lazily as you iterate:

```typescript
const page = await client.jobs.list({ limit: 50 });
for await (const job of page) {
    console.log(job.job_id, job.status);
}
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { HedraError } from "hedra-node";

try {
    await client.jobs.submitKlingO3(...);
} catch (err) {
    if (err instanceof HedraError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
        console.log(err.rawResponse);
    }
}
```

## File Uploads

You can upload files using the client:

```typescript
import * as fs from "fs";
import { HedraClient } from "hedra-node";

const client = new HedraClient({ apiKey: "YOUR_API_KEY" });
await client.files.upload({
    file: fs.createReadStream("/path/to/your/file"),
});
```
The client accepts a variety of types for file upload parameters:
* Stream types: `fs.ReadStream`, `stream.Readable`, and `ReadableStream`
* Buffered types: `Buffer`, `Blob`, `File`, `ArrayBuffer`, `ArrayBufferView`, and `Uint8Array`

### Metadata

You can configure metadata when uploading a file:
```typescript
import { createReadStream } from "fs";
import { Uploadable } from "hedra-node";

const file: Uploadable.WithMetadata = {
    data: createReadStream("path/to/file"),
    filename: "my-file",       // optional
    contentType: "audio/mpeg", // optional
    contentLength: 1949,       // optional
};
```

Alternatively, you can upload a file directly from a file path:
```typescript
import { Uploadable } from "hedra-node";

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
import { HedraClient } from "hedra-node";

const client = new HedraClient({
    ...
    headers: {
        'X-Custom-Header': 'custom value'
    }
});

const response = await client.jobs.submitKlingO3(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Additional Query String Parameters

If you would like to send additional query string parameters as part of the request, use the `queryParams` request option.

```typescript
const response = await client.jobs.submitKlingO3(..., {
    queryParams: {
        'customQueryParamKey': 'custom query param value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retryable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

Which status codes are retried depends on the `retryStatusCodes` generator configuration:

**`legacy`** (current default): retries on
- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) (All server errors, including 500)

**`recommended`**: retries on
- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [502](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502) (Bad Gateway)
- [503](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) (Service Unavailable)
- [504](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504) (Gateway Timeout)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.jobs.submitKlingO3(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.jobs.submitKlingO3(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.jobs.submitKlingO3(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Access Raw Response Data

The SDK provides access to raw response data, including headers, through the `.withRawResponse()` method.
The `.withRawResponse()` method returns a promise that results to an object with a `data` and a `rawResponse` property.

```typescript
const { data, rawResponse } = await client.jobs.submitKlingO3(...).withRawResponse();

console.log(data);
console.log(rawResponse.headers['X-My-Header']);
```

### Logging

The SDK supports logging. You can configure the logger by passing in a `logging` object to the client options.

```typescript
import { HedraClient, logging } from "hedra-node";

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
import { HedraClient, HedraEnvironment } from "hedra-node";

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
