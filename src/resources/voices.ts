// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Voices extends APIResource {
  /**
   * Retrieve available voices
   */
  list(options?: Core.RequestOptions): Core.APIPromise<VoiceListResponse> {
    return this._client.get('/v1/voices', options);
  }
}

export interface VoiceListResponse {
  supported_voices: Array<VoiceListResponse.SupportedVoice>;
}

export namespace VoiceListResponse {
  export interface SupportedVoice {
    service: 'eleven' | 'cartesia';

    voice_id: string;

    created_at?: string | null;

    description?: string | null;

    labels?: Record<string, string> | null;

    name?: string | null;

    premium?: boolean;

    preview_url?: string | null;

    updated_at?: string | null;

    user_id?: string | null;
  }
}

export declare namespace Voices {
  export { type VoiceListResponse as VoiceListResponse };
}
