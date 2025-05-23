/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedPathParameters from "../../../../index.js";

/**
 * @example
 *     {
 *         user_id: "user_id",
 *         body: {
 *             name: "name",
 *             tags: ["tags", "tags"]
 *         }
 *     }
 */
export interface UpdateUserRequest {
    user_id: string;
    body: SeedPathParameters.User;
}
