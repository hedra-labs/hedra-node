// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hedra from 'hedra-node';
import { Response } from 'node-fetch';

const client = new Hedra({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  test('generations: only required params', async () => {
    const responsePromise = client.generations({ generated_video_inputs: { text_prompt: 'text_prompt' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generations: required and optional params', async () => {
    const response = await client.generations({
      generated_video_inputs: {
        text_prompt: 'text_prompt',
        aspect_ratio: 'aspect_ratio',
        bounding_box_target: [{}, {}],
        duration_ms: 0,
        resolution: 'resolution',
      },
      ai_model_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      audio_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      start_keyframe_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      type: 'video',
    });
  });
});
