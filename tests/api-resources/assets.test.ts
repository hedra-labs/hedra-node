// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hedra, { toFile } from 'hedra-node';
import { Response } from 'node-fetch';

const client = new Hedra({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.assets.create({ name: 'name', type: 'image' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.assets.create({ name: 'name', type: 'image' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.assets.list({ type: 'image' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.assets.list({ type: 'image', ids: 'ids' });
  });

  test('upload: only required params', async () => {
    const responsePromise = client.assets.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: required and optional params', async () => {
    const response = await client.assets.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
