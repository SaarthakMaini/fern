/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedMixedCase from "../../../index.js";

/**
 * @example
 *     {
 *         Name: "username",
 *         NestedUser: {
 *             userName: "nestedUsername",
 *             metadata_tags: ["tag1", "tag2"],
 *             EXTRA_PROPERTIES: {
 *                 "foo": "bar",
 *                 "baz": "qux"
 *             }
 *         }
 *     }
 */
export interface NestedUser {
    Name: string;
    NestedUser: SeedMixedCase.User;
}
