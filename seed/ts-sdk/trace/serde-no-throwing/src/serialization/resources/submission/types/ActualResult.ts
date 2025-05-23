/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { ExceptionInfo } from "./ExceptionInfo.js";
import { ExceptionV2 } from "./ExceptionV2.js";

export const ActualResult: core.serialization.Schema<serializers.ActualResult.Raw, SeedTrace.ActualResult> =
    core.serialization
        .union("type", {
            value: core.serialization.object({
                value: core.serialization.lazy(() => serializers.VariableValue),
            }),
            exception: ExceptionInfo,
            exceptionV2: core.serialization.object({
                value: ExceptionV2,
            }),
        })
        .transform<SeedTrace.ActualResult>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace ActualResult {
    export type Raw = ActualResult.Value | ActualResult.Exception | ActualResult.ExceptionV2;

    export interface Value {
        type: "value";
        value: serializers.VariableValue.Raw;
    }

    export interface Exception extends ExceptionInfo.Raw {
        type: "exception";
    }

    export interface ExceptionV2 {
        type: "exceptionV2";
        value: ExceptionV2.Raw;
    }
}
