// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hedra from 'hedra-node';
import { Response } from 'node-fetch';

const client = new Hedra({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  test('retrieve', async () => {
    const responsePromise = client.projects.retrieve('project_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.retrieve('project_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hedra.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.projects.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.projects.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hedra.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.projects.delete('project_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.projects.delete('project_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hedra.NotFoundError,
    );
  });

  test('sharing', async () => {
    const responsePromise = client.projects.sharing('project_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sharing: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.projects.sharing('project_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hedra.NotFoundError,
    );
  });

  test('sharing: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.sharing('project_id', { shared: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hedra.NotFoundError);
  });
});
