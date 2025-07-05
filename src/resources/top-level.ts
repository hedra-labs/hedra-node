// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export type GenerationsResponse =
  | GenerationsResponse.GenerateVideoResponse
  | GenerationsResponse.GenerateTextToSpeechResponse
  | GenerationsResponse.GenerateImageResponse
  | GenerationsResponse.GenerateImageToImageResponse
  | GenerationsResponse.GenerateIsolatedAudioResponse
  | GenerationsResponse.GenerateSpeechToSpeechResponse
  | GenerationsResponse.GenerateVoiceCloneResponse;

export namespace GenerationsResponse {
  export interface GenerateVideoResponse {
    /**
     * The id of the generation created.
     */
    id: string;

    /**
     * The id of the video asset resulting from the generation.
     */
    asset_id: string;

    /**
     * Inputs for generating the video.
     */
    generated_video_inputs: GenerateVideoResponse.GeneratedVideoInputs;

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

  export namespace GenerateVideoResponse {
    /**
     * Inputs for generating the video.
     */
    export interface GeneratedVideoInputs {
      /**
       * Prompt for video generation.
       */
      text_prompt: string;

      /**
       * Aspect ratio for the video.
       */
      aspect_ratio?: string | null;

      /**
       * Normalized coordinates for primary speaker position (Character3 only)
       */
      bounding_box_target?: Array<unknown> | null;

      /**
       * Duration of the video in milliseconds.
       */
      duration_ms?: number | null;

      /**
       * Resolution for the video.
       */
      resolution?: string | null;
    }
  }

  export interface GenerateTextToSpeechResponse {
    /**
     * The id of the generation created.
     */
    id: string;

    /**
     * The id of the audio asset resulting from the generation.
     */
    asset_id: string;

    /**
     * The text to convert to speech.
     */
    text: string;

    /**
     * The id of the Voice to use.
     */
    voice_id: string;

    /**
     * Speed should be between 0.7 and 1.2, where 0.7 is the slowest and 1.2 is the
     * fastest. This varies the speed of the generated speech.
     */
    speed?: number;

    /**
     * Stability should be between 0-1, where 0 is the most stable and 1 is the most
     * unstable. This varies the consistency between your outputs.
     */
    stability?: number;

    type?: 'text_to_speech';
  }

  export interface GenerateImageResponse {
    /**
     * The id of the generation. Can be used to check status.
     */
    id: string;

    /**
     * The model to use.
     */
    ai_model_id: string;

    /**
     * The id of the resulting image asset.
     */
    asset_id: string;

    /**
     * The text prompt for image generation or image editing.
     */
    text_prompt: string;

    /**
     * The aspect ratio to use.
     */
    aspect_ratio?: string | null;

    /**
     * The resolution to use formatted like '540p', '1080p', '1440p (2K QHD)', etc.
     */
    resolution?: string | null;

    /**
     * The id of the Image asset to use as the start keyframe.
     */
    start_keyframe_id?: string | null;

    type?: 'image';
  }

  export interface GenerateImageToImageResponse {
    /**
     * The id of the generation. Can be used to check status.
     */
    id: string;

    /**
     * The model to use.
     */
    ai_model_id: string;

    /**
     * The aspect ratio to use
     */
    aspect_ratio: string;

    /**
     * The id of the resulting image asset.
     */
    asset_id: string;

    /**
     * The id(s) of the image(s) to reference in the generation.
     */
    image_ids: Array<string>;

    /**
     * The resolution to use
     */
    resolution: string;

    /**
     * The text prompt for image generation or image editing.
     */
    text_prompt: string;

    /**
     * The id of the Image asset to use as the start keyframe.
     */
    start_keyframe_id?: string | null;

    type?: 'image_to_image';
  }

  export interface GenerateIsolatedAudioResponse {
    /**
     * The id of the generation created.
     */
    id: string;

    /**
     * The id of the model to use for audio isolation.
     */
    ai_model_id: string;

    /**
     * The id of the isolated audio asset resulting from the generation.
     */
    asset_id: string;

    /**
     * The id of the audio asset requiring sound isolation.
     */
    audio_id: string;

    type?: 'audio_isolation';
  }

  export interface GenerateSpeechToSpeechResponse {
    /**
     * The id of the generation created.
     */
    id: string;

    /**
     * The id of the model to use for audio isolation.
     */
    ai_model_id: string;

    /**
     * The id of the isolated audio asset resulting from the generation.
     */
    asset_id: string;

    /**
     * The id of the audio asset requiring sound isolation.
     */
    audio_id: string;

    /**
     * The id of the Voice to use.
     */
    voice_id: string;

    type?: 'speech_to_speech';
  }

  export interface GenerateVoiceCloneResponse {
    /**
     * The id of the generation. Can be used to check status.
     */
    id: string;

    /**
     * The id of the resulting Voice asset.
     */
    asset_id: string;

    /**
     * The id of the Audio asset to use as the basis for the clone.
     */
    audio_id: string;

    /**
     * The name of the new voice. Required by ElevenLabs to create a new voice.
     */
    name: string;

    type?: 'voice_clone';
  }
}

export type GenerationsParams =
  | GenerationsParams.GenerateVideoRequestInput
  | GenerationsParams.GenerateTextToSpeechRequest
  | GenerationsParams.GenerateImageRequest
  | GenerationsParams.GenerateIsolatedAudioRequest
  | GenerationsParams.GenerateSpeechToSpeechRequest
  | GenerationsParams.GenerateVoiceCloneRequest;

export declare namespace GenerationsParams {
  export interface GenerateVideoRequestInput {
    /**
     * Inputs for generating the video.
     */
    generated_video_inputs: GenerateVideoRequestInput.GeneratedVideoInputs;

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

  export namespace GenerateVideoRequestInput {
    /**
     * Inputs for generating the video.
     */
    export interface GeneratedVideoInputs {
      /**
       * Prompt for video generation.
       */
      text_prompt: string;

      /**
       * Aspect ratio for the video.
       */
      aspect_ratio?: string | null;

      /**
       * Normalized coordinates for primary speaker position (Character3 only)
       */
      bounding_box_target?: Array<unknown> | null;

      /**
       * Duration of the video in milliseconds.
       */
      duration_ms?: number | null;

      /**
       * Resolution for the video.
       */
      resolution?: string | null;
    }
  }

  export interface GenerateTextToSpeechRequest {
    /**
     * The text to convert to speech.
     */
    text: string;

    /**
     * The id of the Voice to use.
     */
    voice_id: string;

    /**
     * Speed should be between 0.7 and 1.2, where 0.7 is the slowest and 1.2 is the
     * fastest. This varies the speed of the generated speech.
     */
    speed?: number;

    /**
     * Stability should be between 0-1, where 0 is the most stable and 1 is the most
     * unstable. This varies the consistency between your outputs.
     */
    stability?: number;

    type?: 'text_to_speech';
  }

  export interface GenerateImageRequest {
    /**
     * The model to use.
     */
    ai_model_id: string;

    /**
     * The text prompt for image generation or image editing.
     */
    text_prompt: string;

    /**
     * The aspect ratio to use.
     */
    aspect_ratio?: string | null;

    /**
     * The resolution to use formatted like '540p', '1080p', '1440p (2K QHD)', etc.
     */
    resolution?: string | null;

    /**
     * The id of the Image asset to use as the start keyframe.
     */
    start_keyframe_id?: string | null;

    type?: 'image';
  }

  export interface GenerateIsolatedAudioRequest {
    /**
     * The id of the model to use for audio isolation.
     */
    ai_model_id: string;

    /**
     * The id of the audio asset requiring sound isolation.
     */
    audio_id: string;

    type?: 'audio_isolation';
  }

  export interface GenerateSpeechToSpeechRequest {
    /**
     * The id of the model to use for audio isolation.
     */
    ai_model_id: string;

    /**
     * The id of the audio asset requiring sound isolation.
     */
    audio_id: string;

    /**
     * The id of the Voice to use.
     */
    voice_id: string;

    type?: 'speech_to_speech';
  }

  export interface GenerateVoiceCloneRequest {
    /**
     * The id of the Audio asset to use as the basis for the clone.
     */
    audio_id: string;

    /**
     * The name of the new voice. Required by ElevenLabs to create a new voice.
     */
    name: string;

    type?: 'voice_clone';
  }
}

export declare namespace TopLevel {
  export { type GenerationsResponse as GenerationsResponse, type GenerationsParams as GenerationsParams };
}
