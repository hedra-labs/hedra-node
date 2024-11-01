// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Portraits extends APIResource {
  /**
   * Upload image
   */
  create(
    params: PortraitCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortraitCreateResponse> {
    const { aspect_ratio, ...body } = params;
    return this._client.post(
      '/v1/portrait',
      Core.multipartFormRequestOptions({ query: { aspect_ratio }, body, ...options }),
    );
  }
}

export interface PortraitCreateResponse {
  url: string;
}

export interface PortraitCreateParams {
  /**
   * Body param:
   */
  file: Core.Uploadable;

  /**
   * Query param:
   */
  aspect_ratio?: string;
}

export declare namespace Portraits {
  export {
    type PortraitCreateResponse as PortraitCreateResponse,
    type PortraitCreateParams as PortraitCreateParams,
  };
}
