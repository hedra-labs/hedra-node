// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ClientAPI from './client';
import * as AssetsAPI from './assets';
import * as TopLevelAPI from './top-level';

export class Client extends APIResource {
  /**
   * List
   */
  listGenerations(
    query?: ClientListGenerationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientListGenerationsResponse>;
  listGenerations(options?: Core.RequestOptions): Core.APIPromise<ClientListGenerationsResponse>;
  listGenerations(
    query: ClientListGenerationsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientListGenerationsResponse> {
    if (isRequestOptions(query)) {
      return this.listGenerations({}, query);
    }
    return this._client.get('/generations', { query, ...options });
  }

  /**
   * Get Status
   */
  retrieveGenerationStatus(
    generationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientRetrieveGenerationStatusResponse> {
    return this._client.get(`/generations/${generationId}/status`, options);
  }
}

export type GenerationStatus = 'complete' | 'error' | 'processing' | 'finalizing' | 'queued' | 'pending';

export interface ClientListGenerationsResponse {
  /**
   * Page data.
   */
  data: Array<ClientListGenerationsResponse.Data>;

  /**
   * Paging information.
   */
  page_info: ClientListGenerationsResponse.PageInfo;
}

export namespace ClientListGenerationsResponse {
  export interface Data {
    /**
     * ID of the generation and associated asset.
     */
    id: string;

    /**
     * Date the generation was submitted.
     */
    created_at: string;

    /**
     * Inputs for the generation
     */
    input:
      | Data.GenerateVideoRequestOutput
      | TopLevelAPI.GenerateTextToSpeechRequest
      | TopLevelAPI.GenerateImageRequest
      | TopLevelAPI.GenerateIsolatedAudioRequest
      | TopLevelAPI.GenerateSpeechToSpeechRequest
      | TopLevelAPI.GenerateVoiceCloneRequest;

    /**
     * Current progress to completion. Between 0-1
     */
    progress: number;

    /**
     * Status of the generation
     */
    status: ClientAPI.GenerationStatus;

    /**
     * Type of generation.
     */
    type: AssetsAPI.AssetType;

    /**
     * The generated asset. Value is not present unless the status of the generation is
     * 'complete'
     */
    asset?: AssetsAPI.Asset | null;

    /**
     * Error message. Value is not present unless the status of the generation is
     * 'error'
     */
    error_message?: string | null;
  }

  export namespace Data {
    export interface GenerateVideoRequestOutput {
      /**
       * Inputs for generating the video.
       */
      generated_video_inputs: TopLevelAPI.GeneratedVideoInputs;

      /**
       * ID of the model to use for the generation.
       */
      ai_model_id?: string;

      /**
       * The id of the Audio asset to use.
       */
      audio_id?: string | null;

      /**
       * The id of the Image asset to use as the start keyframe.
       */
      start_keyframe_id?: string | null;

      type?: 'video';
    }
  }

  /**
   * Paging information.
   */
  export interface PageInfo {
    /**
     * Number of items returned in the page.
     */
    limit: number;

    /**
     * Number of records skipped.
     */
    offset: number;
  }
}

export interface ClientRetrieveGenerationStatusResponse {
  /**
   * ID of the generation.
   */
  id: string;

  /**
   * ID of the generated asset.
   */
  asset_id: string;

  /**
   * Date the generation was submitted.
   */
  created_at: string;

  /**
   * Current progress to completion. Between 0-1
   */
  progress: number;

  /**
   * Status of the generation.
   */
  status: GenerationStatus;

  /**
   * Type of generation.
   */
  type: AssetsAPI.AssetType;

  /**
   * Error message. Value is not present unless the status of the generation is
   * 'error'
   */
  error_message?: string | null;

  /**
   * URL of the generated asset.
   */
  url?: string | null;
}

export interface ClientListGenerationsParams {
  created_after?: string | null;

  created_before?: string | null;

  ids?: string | null;

  paging_params?: ClientListGenerationsParams.PagingParams;

  type?:
    | 'image'
    | 'audio'
    | 'video'
    | 'text_to_speech'
    | 'speech_to_speech'
    | 'voice_clone'
    | 'audio_isolation'
    | 'video_stitching'
    | 'agent_response'
    | null;
}

export namespace ClientListGenerationsParams {
  export interface PagingParams {
    /**
     * Number of items returned in the page.
     */
    limit?: number;

    /**
     * Number of records skipped.
     */
    offset?: number;
  }
}

export declare namespace Client {
  export {
    type GenerationStatus as GenerationStatus,
    type ClientListGenerationsResponse as ClientListGenerationsResponse,
    type ClientRetrieveGenerationStatusResponse as ClientRetrieveGenerationStatusResponse,
    type ClientListGenerationsParams as ClientListGenerationsParams,
  };
}
