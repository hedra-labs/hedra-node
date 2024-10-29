// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CharactersAPI from './characters';

export class Characters extends APIResource {
  /**
   * Initialize character generation
   */
  create(
    body: CharacterCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CharacterCreateResponse> {
    return this._client.post('/v1/characters', { body, ...options });
  }
}

export interface CharacterCreateResponse {
  jobId: string;
}

export interface CharacterCreateParams {
  /**
   * URL of audio uploaded using the /v1/audio endpoint
   */
  aspectRatio?: '1:1' | '16:9' | '9:16';

  /**
   * `tts` for text to speech or `audio`
   */
  audioSource?: 'tts' | 'audio';

  /**
   * URL of image uploaded via /v1/portrait
   */
  avatarImage?: string | null;

  /**
   * Image metadata
   */
  avatarImageInput?: CharacterCreateParams.AvatarImageInput | null;

  /**
   * text to convert to audio. Ignored if audio_source is not tts
   */
  text?: string;

  /**
   * Voice ID
   */
  voiceId?: string | null;

  /**
   * URL of audio uploaded using the /v1/audio endpoint
   */
  voiceUrl?: string | null;
}

export namespace CharacterCreateParams {
  /**
   * Image metadata
   */
  export interface AvatarImageInput {
    prompt: string;

    seed?: number;
  }
}

export namespace Characters {
  export import CharacterCreateResponse = CharactersAPI.CharacterCreateResponse;
  export import CharacterCreateParams = CharactersAPI.CharacterCreateParams;
}
