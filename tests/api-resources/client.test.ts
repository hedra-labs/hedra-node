// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hedra from 'hedra-node';
import { Response } from 'node-fetch';

const client = new Hedra({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource client', () => {
  test('listGenerations', async () => {
    const responsePromise = client.client.listGenerations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listGenerations: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.client.listGenerations({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hedra.NotFoundError,
    );
  });

  test('listGenerations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.client.listGenerations(
        {
          created_after: '2019-12-27T18:11:19.117Z',
          created_before: '2019-12-27T18:11:19.117Z',
          ids: 'ids',
          paging_params: { limit: 0, offset: 0 },
          type: 'image',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hedra.NotFoundError);
  });

  test('retrieveGenerationStatus', async () => {
    const responsePromise = client.client.retrieveGenerationStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveGenerationStatus: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.client.retrieveGenerationStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Hedra.NotFoundError);
  });
});
