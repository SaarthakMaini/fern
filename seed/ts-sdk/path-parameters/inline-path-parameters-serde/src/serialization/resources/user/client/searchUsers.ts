/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedPathParameters from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { User } from "../types/User.js";

export const Response: core.serialization.Schema<serializers.user.searchUsers.Response.Raw, SeedPathParameters.User[]> =
    core.serialization.list(User);

export declare namespace Response {
    export type Raw = User.Raw[];
}
