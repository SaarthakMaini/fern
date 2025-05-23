/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedFileUpload from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { MyObject } from "./MyObject.js";

export const MyAliasObject: core.serialization.ObjectSchema<
    serializers.MyAliasObject.Raw,
    SeedFileUpload.MyAliasObject
> = MyObject;

export declare namespace MyAliasObject {
    export type Raw = MyObject.Raw;
}
