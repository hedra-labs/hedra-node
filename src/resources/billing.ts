// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Billing extends APIResource {
  /**
   * Get Credits
   */
  listCredits(options?: Core.RequestOptions): Core.APIPromise<BillingListCreditsResponse> {
    return this._client.get('/billing/credits', options);
  }
}

/**
 * Information about the current balance of Credits and usage.
 */
export interface BillingListCreditsResponse {
  /**
   * Credits that will expire in the future.
   */
  expiring: number;

  /**
   * Remaining credits not yet used.
   */
  remaining: number;

  /**
   * Credits used in the current billing period.
   */
  used: number;
}

export declare namespace Billing {
  export { type BillingListCreditsResponse as BillingListCreditsResponse };
}
