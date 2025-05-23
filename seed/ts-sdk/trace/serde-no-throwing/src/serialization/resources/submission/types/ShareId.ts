/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const ShareId: core.serialization.Schema<serializers.ShareId.Raw, SeedTrace.ShareId> =
    core.serialization.string();

export declare namespace ShareId {
    export type Raw = string;
}
