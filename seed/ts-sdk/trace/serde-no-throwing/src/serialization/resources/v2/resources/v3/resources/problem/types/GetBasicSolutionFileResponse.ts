/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index.js";
import * as SeedTrace from "../../../../../../../../api/index.js";
import * as core from "../../../../../../../../core/index.js";
import { FileInfoV2 } from "./FileInfoV2.js";
import { Language } from "../../../../../../commons/types/Language.js";

export const GetBasicSolutionFileResponse: core.serialization.ObjectSchema<
    serializers.v2.v3.GetBasicSolutionFileResponse.Raw,
    SeedTrace.v2.v3.GetBasicSolutionFileResponse
> = core.serialization.object({
    solutionFileByLanguage: core.serialization.record(Language, FileInfoV2.optional()),
});

export declare namespace GetBasicSolutionFileResponse {
    export interface Raw {
        solutionFileByLanguage: Record<Language.Raw, FileInfoV2.Raw | null | undefined>;
    }
}
