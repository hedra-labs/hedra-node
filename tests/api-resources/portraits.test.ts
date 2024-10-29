// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hedra, { toFile } from 'hedra';
import { Response } from 'node-fetch';

const client = new Hedra({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portraits', () => {
  test('create: only required params', async () => {
    const responsePromise = client.portraits.create({
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

  test('create: required and optional params', async () => {
    const response = await client.portraits.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      aspect_ratio: 'aspect_ratio',
    });
  });
});
