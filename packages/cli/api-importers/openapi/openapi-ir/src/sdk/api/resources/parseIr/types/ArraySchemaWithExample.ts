/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../../index";

export interface ArraySchemaWithExample
    extends FernOpenapiIr.WithSdkGroupName,
        FernOpenapiIr.WithNamespace,
        FernOpenapiIr.WithName,
        FernOpenapiIr.WithDescription,
        FernOpenapiIr.WithAvailability,
        FernOpenapiIr.WithTitle,
        FernOpenapiIr.WithInline {
    value: FernOpenapiIr.SchemaWithExample;
    example: unknown[] | undefined;
}
