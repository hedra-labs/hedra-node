// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Projects extends APIResource {
  /**
   * Get project
   */
  retrieve(projectId: string, options?: Core.RequestOptions): Core.APIPromise<AvatarProjectItem> {
    return this._client.get(`/v1/projects/${projectId}`, options);
  }

  /**
   * Get all project for the current user
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProjectListResponse> {
    return this._client.get('/v1/projects', options);
  }

  /**
   * Delete a project
   */
  delete(projectId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v1/projects/${projectId}`, options);
  }

  /**
   * Share or unshare a project
   */
  sharing(
    projectId: string,
    params?: ProjectSharingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  sharing(projectId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  sharing(
    projectId: string,
    params: ProjectSharingParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(params)) {
      return this.sharing(projectId, {}, params);
    }
    const { shared } = params;
    return this._client.post(`/v1/projects/${projectId}/sharing`, { query: { shared }, ...options });
  }
}

export interface AvatarProjectItem {
  aspectRatio: '1:1' | '16:9' | '9:16';

  id?: string | null;

  audioSource?: string | null;

  avatarImageInput?: unknown | null;

  avatarImageUrl?: string | null;

  createdAt?: string | null;

  errorMessage?: string | null;

  jobType?: string | null;

  progress?: number | null;

  shared?: boolean;

  stage?: string | null;

  status?: string | null;

  text?: string | null;

  userId?: string | null;

  username?: string | null;

  videoUrl?: string | null;

  voiceId?: string | null;

  voiceUrl?: string | null;
}

export interface ProjectListResponse {
  projects: Array<AvatarProjectItem>;
}

export type ProjectDeleteResponse = unknown;

export type ProjectSharingResponse = unknown;

export interface ProjectSharingParams {
  shared?: boolean;
}

export declare namespace Projects {
  export {
    type AvatarProjectItem as AvatarProjectItem,
    type ProjectListResponse as ProjectListResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectSharingResponse as ProjectSharingResponse,
    type ProjectSharingParams as ProjectSharingParams,
  };
}
