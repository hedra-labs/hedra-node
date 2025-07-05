// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TopLevelAPI from './top-level';

export class Assets extends APIResource {
  /**
   * Create Asset
   */
  create(body: AssetCreateParams, options?: Core.RequestOptions): Core.APIPromise<AssetCreateResponse> {
    return this._client.post('/assets', { body, ...options });
  }

  /**
   * List Assets
   */
  list(query: AssetListParams, options?: Core.RequestOptions): Core.APIPromise<AssetListResponse> {
    return this._client.get('/assets', { query, ...options });
  }

  /**
   * Upload Asset
   */
  upload(id: string, body: AssetUploadParams, options?: Core.RequestOptions): Core.APIPromise<Asset> {
    return this._client.post(`/assets/${id}/upload`, Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface Asset {
  /**
   * The id of the asset.
   */
  id: string;

  /**
   * The asset itself.
   */
  asset:
    | Asset.UploadedImage
    | Asset.UploadedAudio
    | Asset.GeneratedAudio
    | Asset.GeneratedImage
    | GeneratedVideo
    | Asset.Voice;

  /**
   * Date the asset was created.
   */
  created_at: string;

  /**
   * Name of the asset. Default to user-provided file name.
   */
  name: string;

  /**
   * URL of the thumbnail image.
   */
  thumbnail_url: string;

  /**
   * The type of the asset.
   */
  type: AssetType;

  /**
   * Optional description of the asset.
   */
  description?: string | null;

  /**
   * Whether the asset is favorited by the user.
   */
  is_favorite?: boolean;
}

export namespace Asset {
  export interface UploadedImage {
    /**
     * Height of the image.
     */
    height: number;

    /**
     * URL of the image.
     */
    url: string;

    /**
     * Width of the image.
     */
    width: number;

    type?: 'uploaded_image';
  }

  export interface UploadedAudio {
    /**
     * Duration of the audio in seconds.
     */
    duration_ms: number;

    /**
     * URL of the audio.
     */
    url: string;

    /**
     * Transcriptions of the audio.
     */
    transcriptions?: Array<unknown> | null;

    type?: 'uploaded_audio';
  }

  export interface GeneratedAudio {
    /**
     * Duration of the audio in seconds.
     */
    duration_ms: number;

    /**
     * Inputs for generating the audio.
     */
    generated_audio_inputs: GeneratedAudio.GeneratedAudioInputs;

    /**
     * URL of the audio.
     */
    url: string;

    /**
     * Transcriptions of the audio.
     */
    transcriptions?: Array<unknown> | null;

    type?: 'generated_audio';
  }

  export namespace GeneratedAudio {
    /**
     * Inputs for generating the audio.
     */
    export interface GeneratedAudioInputs {
      /**
       * Prompt for audio generation.
       */
      text_prompt: string;
    }
  }

  export interface GeneratedImage {
    /**
     * Inputs for generating the image.
     */
    generated_image_inputs: GeneratedImage.GeneratedImageInputs;

    /**
     * Height of the image.
     */
    height: number;

    /**
     * URL of the image.
     */
    url: string;

    /**
     * Width of the image.
     */
    width: number;

    type?: 'generated_image';
  }

  export namespace GeneratedImage {
    /**
     * Inputs for generating the image.
     */
    export interface GeneratedImageInputs {
      /**
       * Prompt for image generation.
       */
      text_prompt: string;
    }
  }

  export interface Voice {
    /**
     * External ID of the Voice.
     */
    external_id?: string | null;

    /**
     * Labels that help identify the characteristics of the Voice.
     */
    labels?: Array<Voice.Label>;

    /**
     * Preview URL of the Voice.
     */
    preview_url?: string | null;

    /**
     * Source of the Voice.
     */
    source?: string | null;

    type?: 'voice';
  }

  export namespace Voice {
    export interface Label {
      /**
       * Label name.
       */
      name: string;

      /**
       * Label value.
       */
      value: string;
    }
  }
}

export type AssetType = 'image' | 'audio' | 'video' | 'voice';

export interface GeneratedVideo {
  /**
   * URL of the Audio asset used as the basis for the video.
   */
  audio: Asset | null;

  /**
   * Duration of the video.
   */
  duration_ms: number;

  /**
   * Inputs for generating the video.
   */
  generated_video_inputs: TopLevelAPI.GeneratedVideoInputs;

  /**
   * Height of the image.
   */
  height: number;

  /**
   * URL of the Image asset used as the start keyframe.
   */
  keyframe_start: Asset | null;

  /**
   * URL of the preview for animated thumbnails.
   */
  preview_url: string;

  /**
   * URL of the image.
   */
  url: string;

  /**
   * Width of the image.
   */
  width: number;

  type?: 'generated_video';
}

export interface AssetCreateResponse {
  /**
   * The id of the newly created asset. Should be used for upload.
   */
  id: string;

  /**
   * Name of the asset. Default to user-provided file name.
   */
  name: string;

  /**
   * The type of the asset.
   */
  type: AssetType;
}

export type AssetListResponse = Array<Asset>;

export interface AssetCreateParams {
  /**
   * Name of the asset. Default to user-provided file name.
   */
  name: string;

  /**
   * The type of the asset.
   */
  type: AssetType;
}

export interface AssetListParams {
  type: AssetType;

  ids?: string | null;
}

export interface AssetUploadParams {
  file: Core.Uploadable;
}

export declare namespace Assets {
  export {
    type Asset as Asset,
    type AssetType as AssetType,
    type GeneratedVideo as GeneratedVideo,
    type AssetCreateResponse as AssetCreateResponse,
    type AssetListResponse as AssetListResponse,
    type AssetCreateParams as AssetCreateParams,
    type AssetListParams as AssetListParams,
    type AssetUploadParams as AssetUploadParams,
  };
}
