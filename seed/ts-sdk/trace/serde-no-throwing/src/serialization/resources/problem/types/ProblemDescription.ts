/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { ProblemDescriptionBoard } from "./ProblemDescriptionBoard.js";

export const ProblemDescription: core.serialization.ObjectSchema<
    serializers.ProblemDescription.Raw,
    SeedTrace.ProblemDescription
> = core.serialization.object({
    boards: core.serialization.list(ProblemDescriptionBoard),
});

export declare namespace ProblemDescription {
    export interface Raw {
        boards: ProblemDescriptionBoard.Raw[];
    }
}
