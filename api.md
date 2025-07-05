# Hedra

Types:

- <code><a href="./src/resources/top-level.ts">GenerateImageRequest</a></code>
- <code><a href="./src/resources/top-level.ts">GenerateIsolatedAudioRequest</a></code>
- <code><a href="./src/resources/top-level.ts">GenerateSpeechToSpeechRequest</a></code>
- <code><a href="./src/resources/top-level.ts">GenerateTextToSpeechRequest</a></code>
- <code><a href="./src/resources/top-level.ts">GenerateVoiceCloneRequest</a></code>
- <code><a href="./src/resources/top-level.ts">GeneratedVideoInputs</a></code>
- <code><a href="./src/resources/top-level.ts">GenerationsResponse</a></code>

Methods:

- <code title="post /generations">client.<a href="./src/index.ts">generations</a>({ ...params }) -> GenerationsResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>

# Assets

Types:

- <code><a href="./src/resources/assets.ts">Asset</a></code>
- <code><a href="./src/resources/assets.ts">AssetType</a></code>
- <code><a href="./src/resources/assets.ts">GeneratedVideo</a></code>
- <code><a href="./src/resources/assets.ts">AssetCreateResponse</a></code>
- <code><a href="./src/resources/assets.ts">AssetListResponse</a></code>

Methods:

- <code title="post /assets">client.assets.<a href="./src/resources/assets.ts">create</a>({ ...params }) -> AssetCreateResponse</code>
- <code title="get /assets">client.assets.<a href="./src/resources/assets.ts">list</a>({ ...params }) -> AssetListResponse</code>
- <code title="post /assets/{id}/upload">client.assets.<a href="./src/resources/assets.ts">upload</a>(id, { ...params }) -> Asset</code>

# Client

Types:

- <code><a href="./src/resources/client.ts">GenerationStatus</a></code>
- <code><a href="./src/resources/client.ts">ClientListGenerationsResponse</a></code>
- <code><a href="./src/resources/client.ts">ClientRetrieveGenerationStatusResponse</a></code>

Methods:

- <code title="get /generations">client.client.<a href="./src/resources/client.ts">listGenerations</a>({ ...params }) -> ClientListGenerationsResponse</code>
- <code title="get /generations/{generation_id}/status">client.client.<a href="./src/resources/client.ts">retrieveGenerationStatus</a>(generationId) -> ClientRetrieveGenerationStatusResponse</code>

# Billing

Types:

- <code><a href="./src/resources/billing.ts">BillingListCreditsResponse</a></code>

Methods:

- <code title="get /billing/credits">client.billing.<a href="./src/resources/billing.ts">listCredits</a>() -> BillingListCreditsResponse</code>
