# Reference
## Queue
<details><summary><code>client.queue.<a href="/src/api/resources/queue/client/Client.ts">submit</a>(model, { ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.queue.submit("model");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**model:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.SubmitRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueueClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Requests
<details><summary><code>client.requests.<a href="/src/api/resources/requests/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Hedra.RequestSummary, Hedra.RequestListResponse&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.requests.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.requests.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hedra.ListRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/api/resources/requests/client/Client.ts">get</a>(request_id, { ...params }) -> Hedra.ResultResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.get("request_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.GetRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/api/resources/requests/client/Client.ts">getStatus</a>(request_id, { ...params }) -> Hedra.StatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.getStatus("request_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.GetStatusRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/api/resources/requests/client/Client.ts">stream</a>(request_id, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.stream("request_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.StreamRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Models
<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">list</a>({ ...params }) -> Hedra.ModelListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hedra.ListModelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">get</a>(model, { ...params }) -> Hedra.ModelDetail</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.get("model");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**model:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.GetModelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">listVoices</a>(model, { ...params }) -> Hedra.VoiceListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Voices this model accepts — scoped to the model's voice provider.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.listVoices("model");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**model:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.ListVoicesModelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">getOpenapi</a>(model, { ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A standalone one-operation OpenAPI spec for this model's submit call.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.getOpenapi("model");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**model:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.GetOpenapiModelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">estimate</a>(model, { ...params }) -> Hedra.EstimateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.estimate("model");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**model:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.EstimateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Keys
<details><summary><code>client.keys.<a href="/src/api/resources/keys/client/Client.ts">list</a>({ ...params }) -> Hedra.KeyListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.keys.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hedra.ListKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.keys.<a href="/src/api/resources/keys/client/Client.ts">create</a>({ ...params }) -> Hedra.KeyCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.keys.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hedra.KeyCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.keys.<a href="/src/api/resources/keys/client/Client.ts">rotate</a>(key_id, { ...params }) -> Hedra.KeyRotateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.keys.rotate("key_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.KeyRotateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.keys.<a href="/src/api/resources/keys/client/Client.ts">revoke</a>(key_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.keys.revoke("key_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.RevokeKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tokens
<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">create</a>({ ...params }) -> Hedra.TokenCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokens.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hedra.TokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Files
<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">upload</a>({ ...params }) -> Hedra.FileUploadResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.upload({
    file: fs.createReadStream("/path/to/your/file")
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hedra.BodyUploadFileFilesPost` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Webhooks
<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">getPublicKey</a>() -> Hedra.WebhookPublicKey</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.getPublicKey();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

