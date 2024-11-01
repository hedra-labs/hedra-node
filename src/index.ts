// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Audio, AudioCreateParams, AudioCreateResponse } from './resources/audio';
import { CharacterCreateParams, CharacterCreateResponse, Characters } from './resources/characters';
import { PortraitCreateParams, PortraitCreateResponse, Portraits } from './resources/portraits';
import {
  AvatarProjectItem,
  ProjectDeleteResponse,
  ProjectListResponse,
  ProjectSharingParams,
  ProjectSharingResponse,
  Projects,
} from './resources/projects';
import { PingResponse } from './resources/top-level';
import { VoiceListResponse, Voices } from './resources/voices';

export interface ClientOptions {
  /**
   * API key to authorize requests
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['HEDRA_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Hedra API.
 */
export class Hedra extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Hedra API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['X_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['HEDRA_BASE_URL'] ?? /api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('HEDRA_BASE_URL'),
    apiKey = Core.readEnv('X_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.HedraError(
        "The X_API_KEY environment variable is missing or empty; either provide it, or instantiate the Hedra client with an apiKey option, like new Hedra({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `/api`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  voices: API.Voices = new API.Voices(this);
  audio: API.Audio = new API.Audio(this);
  portraits: API.Portraits = new API.Portraits(this);
  characters: API.Characters = new API.Characters(this);
  projects: API.Projects = new API.Projects(this);

  /**
   * Ping
   */
  ping(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this.get('/ping', options);
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-API-Key': this.apiKey };
  }

  static Hedra = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static HedraError = Errors.HedraError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const HedraError = Errors.HedraError;
export const APIError = Errors.APIError;
export const APIConnectionError = Errors.APIConnectionError;
export const APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
export const APIUserAbortError = Errors.APIUserAbortError;
export const NotFoundError = Errors.NotFoundError;
export const ConflictError = Errors.ConflictError;
export const RateLimitError = Errors.RateLimitError;
export const BadRequestError = Errors.BadRequestError;
export const AuthenticationError = Errors.AuthenticationError;
export const InternalServerError = Errors.InternalServerError;
export const PermissionDeniedError = Errors.PermissionDeniedError;
export const UnprocessableEntityError = Errors.UnprocessableEntityError;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

Hedra.Voices = Voices;
Hedra.Audio = Audio;
Hedra.Portraits = Portraits;
Hedra.Characters = Characters;
Hedra.Projects = Projects;

export declare namespace Hedra {
  export type RequestOptions = Core.RequestOptions;

  export { type PingResponse as PingResponse };

  export { Voices as Voices, type VoiceListResponse as VoiceListResponse };

  export {
    Audio as Audio,
    type AudioCreateResponse as AudioCreateResponse,
    type AudioCreateParams as AudioCreateParams,
  };

  export {
    Portraits as Portraits,
    type PortraitCreateResponse as PortraitCreateResponse,
    type PortraitCreateParams as PortraitCreateParams,
  };

  export {
    Characters as Characters,
    type CharacterCreateResponse as CharacterCreateResponse,
    type CharacterCreateParams as CharacterCreateParams,
  };

  export {
    Projects as Projects,
    type AvatarProjectItem as AvatarProjectItem,
    type ProjectListResponse as ProjectListResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectSharingResponse as ProjectSharingResponse,
    type ProjectSharingParams as ProjectSharingParams,
  };
}

export default Hedra;
