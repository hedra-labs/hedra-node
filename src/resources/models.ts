// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Models extends APIResource {
  /**
   * List Models
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
    return this._client.get('/models', options);
  }
}

export type ModelListResponse = Array<ModelListResponse.ModelListResponseItem>;

export namespace ModelListResponse {
  export interface ModelListResponseItem {
    /**
     * ID of the model
     */
    id: string;

    /**
     * Description of the model.
     */
    description: string | null;

    /**
     * Name of the model
     */
    name: string;

    /**
     * Pricing details of the model.
     */
    price_details: ModelListResponseItem.PriceDetails;

    /**
     * Type of generation the model applies to.
     */
    type: string;

    /**
     * Aspect ratios the model supports.
     */
    aspect_ratios?: Array<string> | null;

    /**
     * Whether the model supports custom resolution.
     */
    custom_resolution?: boolean | null;

    /**
     * Width and height for each aspect_ratio and resolution tuple.
     */
    dimensions?: { [key: string]: { [key: string]: ModelListResponseItem.Dimension } } | null;

    /**
     * Durations the model supports.
     */
    durations?: Array<string> | null;

    /**
     * Whether the model is conditioned by audio input.
     */
    requires_audio_input?: boolean | null;

    /**
     * Whether the model is conditioned by a start frame.
     */
    requires_start_frame?: boolean | null;

    /**
     * Resolutions the model supports.
     */
    resolutions?: Array<string> | null;
  }

  export namespace ModelListResponseItem {
    /**
     * Pricing details of the model.
     */
    export interface PriceDetails {
      /**
       * Billing unit of the model (e.g. 'generation', 'second', 'character').
       */
      billing_unit: string;

      /**
       * Credit cost of the model.
       */
      credit_cost: number;

      /**
       * Unit scaling for the cost.
       */
      unit_scale: number;
    }

    export interface Dimension {
      /**
       * Height of the image.
       */
      height: number;

      /**
       * Width of the image.
       */
      width: number;
    }
  }
}

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse };
}
