// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Audio extends APIResource {
  /**
   * Upload audio
   */
  create(body: AudioCreateParams, options?: Core.RequestOptions): Core.APIPromise<AudioCreateResponse> {
    return this._client.post('/v1/audio', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface AudioCreateResponse {
  url: string;
}

export interface AudioCreateParams {
  file: Core.Uploadable;
}

export declare namespace Audio {
  export { type AudioCreateResponse as AudioCreateResponse, type AudioCreateParams as AudioCreateParams };
}
