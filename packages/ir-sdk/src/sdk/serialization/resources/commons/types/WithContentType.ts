/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const WithContentType: core.serialization.ObjectSchema<serializers.WithContentType.Raw, FernIr.WithContentType> =
    core.serialization.objectWithoutOptionalProperties({
        contentType: core.serialization.string().optional(),
    });

export declare namespace WithContentType {
    export interface Raw {
        contentType?: string | null;
    }
}
