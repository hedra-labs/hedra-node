// Wire tests for the v3 client against a local mock server.
// Hand-written on the generated mock-server harness (local `fern generate`
// does not emit wire tests); update alongside the API surface.

import { HedraClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("HedraClient", () => {
    test("queue.submit posts the envelope to /queue/{model}", async () => {
        const server = mockServerPool.createServer();
        const client = new HedraClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            request_id: "req_123",
            model: "kling-o3-pro-i2v",
            status: "IN_QUEUE",
            status_url: "https://api.hedra.com/v3/requests/req_123/status",
            response_url: "https://api.hedra.com/v3/requests/req_123",
            estimated_completion_at: null,
        };

        server
            .mockEndpoint()
            .post("/queue/kling-o3-pro")
            .jsonBody({ input: { prompt: "a fox" } })
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.queue.submit("kling-o3-pro", {
            input: { prompt: "a fox" },
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("requests.getStatus polls /requests/{id}/status", async () => {
        const server = mockServerPool.createServer();
        const client = new HedraClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            request_id: "req_123",
            model: "kling-o3-pro-i2v",
            status: "IN_PROGRESS",
            progress: 0.5,
            estimated_completion_at: null,
            logs: null,
        };

        server
            .mockEndpoint()
            .get("/requests/req_123/status")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.requests.getStatus("req_123");
        expect(response).toEqual(rawResponseBody);
    });

    test("requests.get fetches the result envelope", async () => {
        const server = mockServerPool.createServer();
        const client = new HedraClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            request_id: "req_123",
            model: "kling-o3-pro-i2v",
            status: "COMPLETED",
            outputs: [
                {
                    url: "https://cdn.hedra.com/out.mp4",
                    content_type: "video/mp4",
                },
            ],
            error: null,
        };

        server
            .mockEndpoint()
            .get("/requests/req_123")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.requests.get("req_123");
        expect(response).toEqual(rawResponseBody);
    });

    test("requests.list pages with cursor params", async () => {
        const server = mockServerPool.createServer();
        const client = new HedraClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            data: [
                {
                    request_id: "req_123",
                    model: "kling-o3-pro-i2v",
                    status: "COMPLETED",
                    created_at: "2026-07-08T00:00:00Z",
                },
            ],
            next_cursor: null,
        };

        server.mockEndpoint().get("/requests").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const page = await client.requests.list();
        expect(page.data.length).toEqual(1);
    });

    test("models.list returns the catalog", async () => {
        const server = mockServerPool.createServer();
        const client = new HedraClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            data: [
                {
                    id: "kling-o3-pro",
                    modality: "video",
                    name: "Kling O3 Pro",
                    description: "desc",
                    thumbnail_url: null,
                    premium: true,
                },
            ],
            next_cursor: null,
        };

        server.mockEndpoint().get("/models").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.models.list();
        expect(response).toEqual(rawResponseBody);
    });

    test("sends Bearer authorization from apiKey on authenticated endpoints", async () => {
        const server = mockServerPool.createServer();
        const client = new HedraClient({ maxRetries: 0, apiKey: "id:secret", environment: server.baseUrl });

        const rawResponseBody = {
            request_id: "req_123",
            model: "kling-o3-pro-i2v",
            status: "COMPLETED",
        };

        server
            .mockEndpoint()
            .get("/requests/req_123/status")
            .header("Authorization", "Bearer id:secret")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.requests.getStatus("req_123");
        expect(response).toEqual(rawResponseBody);
    });
});
