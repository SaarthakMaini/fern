/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index.js";
import * as SeedExhaustive from "../../../../../../api/index.js";
import * as core from "../../../../../../core/index.js";

export const ObjectWithRequiredField: core.serialization.ObjectSchema<
    serializers.types.ObjectWithRequiredField.Raw,
    SeedExhaustive.types.ObjectWithRequiredField
> = core.serialization.object({
    string: core.serialization.string(),
});

export declare namespace ObjectWithRequiredField {
    export interface Raw {
        string: string;
    }
}
