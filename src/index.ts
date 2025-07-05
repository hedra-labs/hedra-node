// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';
import {
  GenerateImageRequest,
  GenerateIsolatedAudioRequest,
  GenerateSpeechToSpeechRequest,
  GenerateTextToSpeechRequest,
  GenerateVoiceCloneRequest,
  GeneratedVideoInputs,
  GenerationsParams,
  GenerationsResponse,
} from './resources/top-level';
import {
  Asset,
  AssetCreateParams,
  AssetCreateResponse,
  AssetListParams,
  AssetListResponse,
  AssetType,
  AssetUploadParams,
  Assets,
  GeneratedVideo,
} from './resources/assets';
import { Billing, BillingListCreditsResponse } from './resources/billing';
import {
  Client,
  ClientListGenerationsParams,
  ClientListGenerationsResponse,
  ClientRetrieveGenerationStatusResponse,
  GenerationStatus,
} from './resources/client';
import { ModelListResponse, Models } from './resources/models';

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
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

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
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
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
   * @param {string | undefined} [opts.apiKey=process.env['HEDRA_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['HEDRA_BASE_URL'] ?? https://api.hedra.com/web-app/Public] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('HEDRA_BASE_URL'),
    apiKey = Core.readEnv('HEDRA_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.HedraError(
        "The HEDRA_API_KEY environment variable is missing or empty; either provide it, or instantiate the Hedra client with an apiKey option, like new Hedra({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.hedra.com/web-app/Public`,
    };

    super({
      baseURL: options.baseURL!,
      baseURLOverridden: baseURL ? baseURL !== 'https://api.hedra.com/web-app/Public' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  models: API.Models = new API.Models(this);
  assets: API.Assets = new API.Assets(this);
  client: API.Client = new API.Client(this);
  billing: API.Billing = new API.Billing(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.hedra.com/web-app/Public';
  }

  /**
   * Generate Asset
   */
  generations(
    body: TopLevelAPI.GenerationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.GenerationsResponse> {
    return this.post('/generations', { body, ...options });
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

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
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

Hedra.Models = Models;
Hedra.Assets = Assets;
Hedra.Client = Client;
Hedra.Billing = Billing;
export declare namespace Hedra {
  export type RequestOptions = Core.RequestOptions;

  export {
    type GenerateImageRequest as GenerateImageRequest,
    type GenerateIsolatedAudioRequest as GenerateIsolatedAudioRequest,
    type GenerateSpeechToSpeechRequest as GenerateSpeechToSpeechRequest,
    type GenerateTextToSpeechRequest as GenerateTextToSpeechRequest,
    type GenerateVoiceCloneRequest as GenerateVoiceCloneRequest,
    type GeneratedVideoInputs as GeneratedVideoInputs,
    type GenerationsResponse as GenerationsResponse,
    type GenerationsParams as GenerationsParams,
  };

  export { Models as Models, type ModelListResponse as ModelListResponse };

  export {
    Assets as Assets,
    type Asset as Asset,
    type AssetType as AssetType,
    type GeneratedVideo as GeneratedVideo,
    type AssetCreateResponse as AssetCreateResponse,
    type AssetListResponse as AssetListResponse,
    type AssetCreateParams as AssetCreateParams,
    type AssetListParams as AssetListParams,
    type AssetUploadParams as AssetUploadParams,
  };

  export {
    Client as Client,
    type GenerationStatus as GenerationStatus,
    type ClientListGenerationsResponse as ClientListGenerationsResponse,
    type ClientRetrieveGenerationStatusResponse as ClientRetrieveGenerationStatusResponse,
    type ClientListGenerationsParams as ClientListGenerationsParams,
  };

  export { Billing as Billing, type BillingListCreditsResponse as BillingListCreditsResponse };
}

export { toFile, fileFromPath } from './uploads';
export {
  HedraError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Hedra;
