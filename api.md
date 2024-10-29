# Hedra

Types:

- <code><a href="./src/resources/top-level.ts">PingResponse</a></code>

Methods:

- <code title="get /ping">client.<a href="./src/index.ts">ping</a>() -> unknown</code>

# Voices

Types:

- <code><a href="./src/resources/voices.ts">VoiceListResponse</a></code>

Methods:

- <code title="get /v1/voices">client.voices.<a href="./src/resources/voices.ts">list</a>() -> VoiceListResponse</code>

# Audio

Types:

- <code><a href="./src/resources/audio.ts">AudioCreateResponse</a></code>

Methods:

- <code title="post /v1/audio">client.audio.<a href="./src/resources/audio.ts">create</a>({ ...params }) -> AudioCreateResponse</code>

# Portraits

Types:

- <code><a href="./src/resources/portraits.ts">PortraitCreateResponse</a></code>

Methods:

- <code title="post /v1/portrait">client.portraits.<a href="./src/resources/portraits.ts">create</a>({ ...params }) -> PortraitCreateResponse</code>

# Characters

Types:

- <code><a href="./src/resources/characters.ts">CharacterCreateResponse</a></code>

Methods:

- <code title="post /v1/characters">client.characters.<a href="./src/resources/characters.ts">create</a>({ ...params }) -> CharacterCreateResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">AvatarProjectItem</a></code>
- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectSharingResponse</a></code>

Methods:

- <code title="get /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">retrieve</a>(projectId) -> AvatarProjectItem</code>
- <code title="get /v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>() -> ProjectListResponse</code>
- <code title="delete /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(projectId) -> unknown</code>
- <code title="post /v1/projects/{project_id}/sharing">client.projects.<a href="./src/resources/projects.ts">sharing</a>(projectId, { ...params }) -> unknown</code>
