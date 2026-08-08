# Reference
## Jobs
<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Hedra.JobSummary, Hedra.JobListResponse&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.jobs.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.jobs.list();
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

**request:** `Hedra.JobsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">get</a>(job_id, { ...params }) -> Hedra.ResultResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.get("job_id");

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

**job_id:** `string` — The job's id (`job_<uuid>`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.JobsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">getStatus</a>(job_id, { ...params }) -> Hedra.StatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.getStatus("job_id");

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

**job_id:** `string` — The job's id (`job_<uuid>`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.JobsGetStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">listJobLogs</a>(job_id, { ...params }) -> core.Page&lt;Hedra.JobLogItem, Hedra.JobLogListResponse&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.jobs.listJobLogs("job_id");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.jobs.listJobLogs("job_id");
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

**job_id:** `string` — The job's id (`job_<uuid>`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.JobsListJobLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">stream</a>(job_id, { ...params }) -> core.Stream&lt;Hedra.JobsStreamResponse&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.jobs.stream("job_id");
for await (const item of response) {
    console.log(item);
}

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

**job_id:** `string` — The job's id (`job_<uuid>`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.JobsStreamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitDreamina31</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ultra high quality generations for professional grade images.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitDreamina31({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "540p"
    }
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

**request:** `Hedra.SubmitBodyDreamina31` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitElevenlabsFlashMultilingualV2</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitElevenlabsFlashMultilingualV2({
    input: {
        text: "text",
        voice_id: "voice_id"
    }
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

**request:** `Hedra.SubmitBodyElevenlabsFlashMultilingualV2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitElevenlabsFlashV2</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitElevenlabsFlashV2({
    input: {
        text: "text",
        voice_id: "voice_id"
    }
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

**request:** `Hedra.SubmitBodyElevenlabsFlashV2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitElevenlabsMultilingualV2</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitElevenlabsMultilingualV2({
    input: {
        text: "text",
        voice_id: "voice_id"
    }
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

**request:** `Hedra.SubmitBodyElevenlabsMultilingualV2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitElevenlabsV3</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

ElevenLabs V3

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitElevenlabsV3({
    input: {
        text: "text",
        voice_id: "voice_id"
    }
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

**request:** `Hedra.SubmitBodyElevenlabsV3` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitFlux11Pro</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Premium color depth and clarity when you want campaign-ready art that feels handcrafted.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitFlux11Pro({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "540p"
    }
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

**request:** `Hedra.SubmitBodyFlux11Pro` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitFlux11Ultra</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The big-canvas choice for ultra-high-res images and flagship visuals.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitFlux11Ultra({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9"
    }
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

**request:** `Hedra.SubmitBodyFlux11Ultra` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitFlux3</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Black Forest Labs FLUX.3 text-to-video with native audio.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitFlux3({
    input: {
        prompt: "prompt",
        aspect_ratio: "auto",
        resolution: "720p",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyFlux3` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitFluxDev</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fast and light for quick concepts or high-volume social posts on a budget.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitFluxDev({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "540p"
    }
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

**request:** `Hedra.SubmitBodyFluxDev` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitFluxKontextMax</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Highest-fidelity reference-image support for complex, multi-element scenes and perfectly matched branded visuals.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitFluxKontextMax({
    input: {
        prompt: "prompt"
    }
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

**request:** `Hedra.SubmitBodyFluxKontextMax` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitFluxKontextPro</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reference-image support for character, brand, or style consistency.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitFluxKontextPro({
    input: {
        prompt: "prompt"
    }
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

**request:** `Hedra.SubmitBodyFluxKontextPro` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitFlux2Flex</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Image creation and editing with FLUX.2 [flex] from Black Forest Labs.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitFlux2Flex({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9"
    }
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

**request:** `Hedra.SubmitBodyFlux2Flex` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitFlux2Klein9B</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Flux.2 [klein] 9B model from Black Forest Labs.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitFlux2Klein9B({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9"
    }
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

**request:** `Hedra.SubmitBodyFlux2Klein9B` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitFlux2Max</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

FLUX.2 [max] delivers state-of-the-art image generation and advanced image editing with exceptional realism, precision, and consistency.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitFlux2Max({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9"
    }
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

**request:** `Hedra.SubmitBodyFlux2Max` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitFlux2Pro</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Image creation and editing with FLUX.2 [pro] from Black Forest Labs. Ideal for high-quality image manipulation, style transfer, and sequential editing workflows

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitFlux2Pro({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9"
    }
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

**request:** `Hedra.SubmitBodyFlux2Pro` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitGeminiOmniFlash</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gemini's fast multimodal video model — cinematic clips with native audio from a prompt, a keyframe, or reference images.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitGeminiOmniFlash({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9"
    }
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

**request:** `Hedra.SubmitBodyGeminiOmniFlash` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitGptImage15</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

OpenAI-powered image generation with exceptional prompt understanding and versatile editing capabilities.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitGptImage15({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1"
    }
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

**request:** `Hedra.SubmitBodyGptImage15` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitGptImage2</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

OpenAI's balanced tier; moderate cost and fidelity, ideal for iterative refinement and everyday generation.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitGptImage2({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "1K",
        quality: "low"
    }
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

**request:** `Hedra.SubmitBodyGptImage2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitGrokImagine</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

xAI's Grok Imagine image generation model

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitGrokImagine({
    input: {
        prompt: "prompt"
    }
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

**request:** `Hedra.SubmitBodyGrokImagine` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitGrokVideo</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

xAI's text-to-video generation model.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitGrokVideo({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "480p",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyGrokVideo` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitHappyHorse</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate video from text with Alibaba Happy Horse 1.0.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitHappyHorse({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "720p",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyHappyHorse` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitHedraAvatar</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Hedra's latest longform avatar model, audio to video will full multi-language support. Perfect for talking and singing video with speaker selection up to 10 minutes long.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitHedraAvatar({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "540p",
        start_image: {
            source: "url",
            url: "url"
        },
        audio: {
            source: "url",
            url: "url"
        }
    }
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

**request:** `Hedra.SubmitBodyHedraAvatar` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitHedraCharacter3</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Hedra's latest longform avatar model, audio to video will full multi-language support. Perfect for talking and singing video with speaker selection up to 10 minutes long.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitHedraCharacter3({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "540p",
        start_image: {
            source: "url",
            url: "url"
        },
        audio: {
            source: "url",
            url: "url"
        }
    }
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

**request:** `Hedra.SubmitBodyHedraCharacter3` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitHidreamO1Image</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

HiDream.ai's open-weights HiDream-O1-Image (8B): one pixel-native model that generates, edits, and personalizes without a VAE or a separate text encoder.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitHidreamO1Image({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyHidreamO1Image` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitIdeogramV2</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Best in class for poster-ready images and spot-on text rendering in social graphics.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitIdeogramV2({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1"
    }
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

**request:** `Hedra.SubmitBodyIdeogramV2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitIdeogramV4</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ideogram V4 renders poster-ready text and layout; the required quality parameter picks turbo, balanced or quality, which sets both the render effort and the price.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitIdeogramV4({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "720p",
        quality: "turbo"
    }
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

**request:** `Hedra.SubmitBodyIdeogramV4` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitImagen3</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The latest text to image model from Google

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitImagen3({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9"
    }
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

**request:** `Hedra.SubmitBodyImagen3` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitImagen4</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Google's photoreal model—natural lighting, lifelike skin, and pro-grade sharpness in every shot.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitImagen4({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "1K"
    }
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

**request:** `Hedra.SubmitBodyImagen4` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitKling16</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitKling16({
    input: {
        prompt: "prompt"
    }
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

**request:** `Hedra.SubmitBodyKling16` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitKling21Master</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cinema-grade video with striking textures and rich depth.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitKling21Master({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyKling21Master` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitKling25Turbo</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fast, high-quality video generation.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitKling25Turbo({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyKling25Turbo` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitKling26Pro</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cinematic visuals, fluid motion, and native audio generation.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitKling26Pro({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyKling26Pro` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitKlingAiAvatarV2</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create avatar videos with realistic humans, animals, cartoons, or stylized characters from an image and audio input.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitKlingAiAvatarV2({
    input: {
        aspect_ratio: "16:9",
        start_image: {
            source: "url",
            url: "url"
        },
        audio: {
            source: "url",
            url: "url"
        },
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyKlingAiAvatarV2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitKlingO1</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate from a single image with text-driven style and scene guidance.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitKlingO1({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyKlingO1` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitKlingO3</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Text-to-video model with up to 15-second generations and native audio.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitKlingO3({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        duration_ms: 1,
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyKlingO3` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitKlingV3</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Text-to-video with ultra-high-definition storyboards and native audio.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitKlingV3({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        duration_ms: 1,
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyKlingV3` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitLtx23</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lightricks LTX-2.3 text-to-video at up to 4K, with synchronized native audio

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitLtx23({
    input: {
        prompt: "prompt",
        resolution: "1080p",
        duration_ms: 1,
        aspect_ratio: "16:9",
        quality: "fast"
    }
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

**request:** `Hedra.SubmitBodyLtx23` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitLumaRay32</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Luma Ray 3.2 text-to-video with cinematic motion and camera control

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitLumaRay32({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "540p",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyLumaRay32` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitMaiImage25</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Microsoft AI's MAI-Image-2.5: photorealistic generation and editing with strong in-image typography and design-ready output.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitMaiImage25({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyMaiImage25` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitMinimaxH3</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

MiniMax H3 video generation from text, frames, or references.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitMinimaxH3({
    input: {
        prompt: "prompt",
        resolution: "768p",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyMinimaxH3` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitMinimaxHailuo02</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Everyday 1080p video with natural movement.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitMinimaxHailuo02({
    input: {
        prompt: "prompt",
        duration_ms: 1,
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyMinimaxHailuo02` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitMinimaxHailuo23</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Everyday 1080p video with natural movement.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitMinimaxHailuo23({
    input: {
        prompt: "prompt",
        duration_ms: 1,
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyMinimaxHailuo23` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitMinimaxSpeech25HdPreview</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The brand new HD model. Ultimate Similarity, Ultra-High Quality. Supports 40+ languages including Tamil, Hebrew, Swedish, etc.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitMinimaxSpeech25HdPreview({
    input: {
        text: "text",
        voice_id: "voice_id"
    }
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

**request:** `Hedra.SubmitBodyMinimaxSpeech25HdPreview` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitMinimaxSpeech25TurboPreview</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The brand new Turbo model. Ultimate Value, 40 Languages. Major improvements to natural English expression.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitMinimaxSpeech25TurboPreview({
    input: {
        text: "text",
        voice_id: "voice_id"
    }
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

**request:** `Hedra.SubmitBodyMinimaxSpeech25TurboPreview` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitNanoBanana</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Best in class image model with reference image support and ultra high quality generations for professional grade images.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitNanoBanana({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "1K"
    }
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

**request:** `Hedra.SubmitBodyNanoBanana` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitNanoBanana2</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gemini 3.1 Flash native image generation with improved quality and advanced features including multi-subject reference and high-fidelity style transfer

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitNanoBanana2({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "1K"
    }
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

**request:** `Hedra.SubmitBodyNanoBanana2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitNanoBananaPro</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gemini 3 Pro native image generation with advanced multimodal understanding and richer visuals

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitNanoBananaPro({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "1K"
    }
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

**request:** `Hedra.SubmitBodyNanoBananaPro` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitOmnihuman15</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates vivid, emotional character videos driven entirely by your audio.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitOmnihuman15({
    input: {
        start_image: {
            source: "url",
            url: "url"
        },
        audio: {
            source: "url",
            url: "url"
        }
    }
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

**request:** `Hedra.SubmitBodyOmnihuman15` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitPixverseV6</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

PixVerse V6 text-to-video with native audio and 1080p output up to 15 seconds

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitPixverseV6({
    input: {
        prompt: "prompt",
        resolution: "360p",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyPixverseV6` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitQwenImage2</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Alibaba's Qwen-Image-2.0, tuned for speed. Native 2K output with professional in-image text rendering, for rapid iteration.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitQwenImage2({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "540p",
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyQwenImage2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitRecraftV3</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Vector-clean graphics and crisp logos on demand.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitRecraftV3({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "540p"
    }
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

**request:** `Hedra.SubmitBodyRecraftV3` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitReve21</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate images from a text prompt with strong prompt adherence, layout intelligence, and accurate text rendering

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitReve21({
    input: {
        prompt: "prompt",
        aspect_ratio: "4:1"
    }
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

**request:** `Hedra.SubmitBodyReve21` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitReve21Edit</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edit one source image from a natural-language instruction, keeping the rest of the image intact

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitReve21Edit({
    input: {
        prompt: "prompt",
        aspect_ratio: "4:1",
        images: [{
                source: "url",
                url: "url"
            }]
    }
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

**request:** `Hedra.SubmitBodyReve21Edit` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitReve21Remix</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Compose up to eight reference images into a new image from a text prompt

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitReve21Remix({
    input: {
        prompt: "prompt",
        aspect_ratio: "4:1",
        images: [{
                source: "url",
                url: "url"
            }]
    }
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

**request:** `Hedra.SubmitBodyReve21Remix` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitSana</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lightning-fast and cheap for simple product shots or everyday content.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitSana({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "540p"
    }
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

**request:** `Hedra.SubmitBodySana` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitSeedance15Pro</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

ByteDance Seedance 1.5 Pro video generation model

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitSeedance15Pro({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "480p",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodySeedance15Pro` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitSeedance20</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

ByteDance Seedance 2.0 video generation model

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitSeedance20({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "480p",
        duration_ms: 1,
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodySeedance20` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitSeedance20Mini</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

ByteDance Seedance 2.0 Mini video generation model

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitSeedance20Mini({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "480p",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodySeedance20Mini` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitSeedream40</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ultra-fast pro grade image model, pairing reference image support with high quality output for professional visuals

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitSeedream40({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "1080p"
    }
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

**request:** `Hedra.SubmitBodySeedream40` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitSeedream45</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Latest Seedream with enhanced detail, refined composition, and multi-reference image support for professional visuals.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitSeedream45({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "1440p (2K QHD)"
    }
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

**request:** `Hedra.SubmitBodySeedream45` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitSeedream50Lite</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

ByteDance Seedream 5.0 Lite Text-to-Image

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitSeedream50Lite({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "1440p (2K QHD)"
    }
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

**request:** `Hedra.SubmitBodySeedream50Lite` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitSeedream50Pro</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

ByteDance Seedream 5.0 Pro Text-to-Image

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitSeedream50Pro({
    input: {
        prompt: "prompt",
        aspect_ratio: "1:1",
        resolution: "1080p"
    }
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

**request:** `Hedra.SubmitBodySeedream50Pro` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitSora2Pro</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

For complex, narrative-driven videos with remarkable consistency and realistic character-world interaction.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitSora2Pro({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "720p",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodySora2Pro` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitVeedFabric10</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Talking video with natural lip-sync and expressive animation.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitVeedFabric10({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "480p",
        start_image: {
            source: "url",
            url: "url"
        },
        audio: {
            source: "url",
            url: "url"
        }
    }
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

**request:** `Hedra.SubmitBodyVeedFabric10` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitVeo2</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The current state of the art in video generation

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitVeo2({
    input: {
        prompt: "prompt"
    }
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

**request:** `Hedra.SubmitBodyVeo2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitVeo3</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Hollywood-grade, cinematic video straight from text—your go-to for hero campaigns.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitVeo3({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "720p",
        duration_ms: 1,
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyVeo3` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitVeo31</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

For unparalleled detail and nuance, perfect for when your vision requires the best possible quality.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitVeo31({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "720p",
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyVeo31` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitViduQ3</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Vidu Q3 video with native dialogue and sound, up to 16 seconds — from a text prompt, from a start frame, or between a start and end frame

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitViduQ3({
    input: {
        prompt: "prompt",
        resolution: "540p",
        duration_ms: 1,
        quality: "standard"
    }
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

**request:** `Hedra.SubmitBodyViduQ3` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitViduQ3Reference</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Vidu Q3 reference-to-video keeping up to four subjects consistent

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitViduQ3Reference({
    input: {
        prompt: "prompt",
        aspect_ratio: "16:9",
        resolution: "540p",
        duration_ms: 1,
        images: [{
                source: "url",
                url: "url"
            }]
    }
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

**request:** `Hedra.SubmitBodyViduQ3Reference` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submitWan27</a>({ ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Wan 2.7 video with native audio — from a text prompt, from a first frame with an optional last frame, or from reference images that keep subjects consistent

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submitWan27({
    input: {
        prompt: "prompt",
        resolution: "720p",
        duration_ms: 1
    }
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

**request:** `Hedra.SubmitBodyWan27` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">submit</a>(model, { ...params }) -> Hedra.SubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Runs any model in the catalog by its public id, with `input` passed through untyped — the same call the typed operations below make, minus the compile-time schema.

Reach for it when the model is not known ahead of time: a client generated before a model shipped can still run it, and an id read from `GET /v3/models` at runtime needs no regeneration. Prefer the typed operation whenever your client already has one — `input` here is validated against the same published schema (`GET /v3/models/{model}`), so a bad field is a `400` at submit rather than an error before the call.

Submits an asynchronous job and returns `202` with a job id. Fetch the result at `GET /v3/jobs/{job_id}` — each item in its `outputs[]` follows the `OutputItem` schema — or track progress via `GET /v3/jobs/{job_id}/status` / the SSE stream at `GET /v3/jobs/{job_id}/stream`.
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
await client.jobs.submit("model", {
    input: {
        "key": "value"
    }
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

**model:** `string` — The model's public id (`GET /v3/models`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.SubmitBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
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

**request:** `Hedra.ModelsListRequest` 
    
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

**model:** `string` — The model's public id (`GET /v3/models`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.ModelsGetRequest` 
    
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

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">listModelJobs</a>(model, { ...params }) -> core.Page&lt;Hedra.JobSummary, Hedra.JobListResponse&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.models.listModelJobs("model");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.models.listModelJobs("model");
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

**model:** `string` — The model's public id (`GET /v3/models`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.ModelsListModelJobsRequest` 
    
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

Voices this model accepts — scoped to the model's voice provider. fern-config end-to-end regeneration probe 20260808-020649.
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

**model:** `string` — The model's public id (`GET /v3/models`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.ModelsListVoicesRequest` 
    
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

**model:** `string` — The model's public id (`GET /v3/models`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.ModelsGetOpenapiRequest` 
    
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

**model:** `string` — The model's public id (`GET /v3/models`).
    
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

**request:** `Hedra.KeysListRequest` 
    
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

**key_id:** `string` — The key's public identifier.
    
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

**key_id:** `string` — The key's public identifier.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.KeysRevokeRequest` 
    
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

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Store a file and return a short-lived URL to pass in a model's `input`.

Free, and available on an empty API wallet — funding is enforced when you
submit a generation, not when you upload its inputs. `GET /v3/balance`
reports what the wallet holds.
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

**request:** `Hedra.FilesUploadRequest` 
    
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

## Billing
<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">getBalance</a>() -> Hedra.BalanceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.getBalance();

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

**requestOptions:** `BillingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">getUsage</a>({ ...params }) -> Hedra.UsageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.getUsage();

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

**request:** `Hedra.BillingGetUsageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingClient.RequestOptions` 
    
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

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">getDefault</a>() -> Hedra.WebhookDefaultConfig</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.getDefault();

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

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">putDefault</a>({ ...params }) -> Hedra.WebhookDefaultConfig</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.putDefault({
    url: "url"
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

**request:** `Hedra.WebhookDefaultUpdate` 
    
</dd>
</dl>

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

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">deleteDefault</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.deleteDefault();

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

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">testDefault</a>() -> Hedra.WebhookTestResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.testDefault();

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

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">listDeliveries</a>({ ...params }) -> core.Page&lt;Hedra.WebhookDeliverySummary, Hedra.WebhookDeliveryListResponse&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.webhooks.listDeliveries();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.webhooks.listDeliveries();
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

**request:** `Hedra.WebhooksListDeliveriesRequest` 
    
</dd>
</dl>

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

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">redeliver</a>(job_id, { ...params }) -> Hedra.WebhookDeliverySummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replay a finished delivery: reset it to PENDING and re-fire the signed POST.

404 if the delivery isn't visible to the caller; 409 if a delivery for the
request is still in flight (a replay must not stack on it). The delivery is
re-validated (SSRF) and re-signed at send time, and the receiver dedupes on
``X-Hedra-Webhook-Id``, so a replay is safe.

The webhook id is stable across the original and every replay, because it
identifies the event. Every attempt of a replayed cycle therefore also carries
``X-Hedra-Webhook-Redelivery: true`` — without it a receiver doing exactly what
our guidance says (dedupe on the id) would silently discard the replay, which is
the one case where the duplicate is the point.
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
await client.webhooks.redeliver("job_id");

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

**job_id:** `string` — The job's id (`job_<uuid>`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.WebhooksRedeliverRequest` 
    
</dd>
</dl>

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

## Log drains
<details><summary><code>client.logDrains.<a href="/src/api/resources/logDrains/client/Client.ts">listLogDrains</a>() -> Hedra.LogDrainListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.logDrains.listLogDrains();

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

**requestOptions:** `LogDrainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.logDrains.<a href="/src/api/resources/logDrains/client/Client.ts">createLogDrain</a>({ ...params }) -> Hedra.LogDrainConfig</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.logDrains.createLogDrain({
    name: "name",
    url: "url"
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

**request:** `Hedra.LogDrainCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogDrainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.logDrains.<a href="/src/api/resources/logDrains/client/Client.ts">getLogDrain</a>(drain_id, { ...params }) -> Hedra.LogDrainConfig</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.logDrains.getLogDrain("drain_id");

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

**drain_id:** `string` — The drain's id (`drain_<uuid>`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.LogDrainsGetLogDrainRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogDrainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.logDrains.<a href="/src/api/resources/logDrains/client/Client.ts">deleteLogDrain</a>(drain_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.logDrains.deleteLogDrain("drain_id");

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

**drain_id:** `string` — The drain's id (`drain_<uuid>`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.LogDrainsDeleteLogDrainRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogDrainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.logDrains.<a href="/src/api/resources/logDrains/client/Client.ts">updateLogDrain</a>(drain_id, { ...params }) -> Hedra.LogDrainConfig</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.logDrains.updateLogDrain("drain_id");

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

**drain_id:** `string` — The drain's id (`drain_<uuid>`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.LogDrainUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogDrainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.logDrains.<a href="/src/api/resources/logDrains/client/Client.ts">testLogDrain</a>(drain_id, { ...params }) -> Hedra.LogDrainTestResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.logDrains.testLogDrain("drain_id");

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

**drain_id:** `string` — The drain's id (`drain_<uuid>`).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Hedra.LogDrainsTestLogDrainRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogDrainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

