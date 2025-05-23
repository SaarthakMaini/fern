/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { Language } from "../../commons/types/Language.js";

export const UnexpectedLanguageError: core.serialization.ObjectSchema<
    serializers.UnexpectedLanguageError.Raw,
    SeedTrace.UnexpectedLanguageError
> = core.serialization.object({
    expectedLanguage: Language,
    actualLanguage: Language,
});

export declare namespace UnexpectedLanguageError {
    export interface Raw {
        expectedLanguage: Language.Raw;
        actualLanguage: Language.Raw;
    }
}
