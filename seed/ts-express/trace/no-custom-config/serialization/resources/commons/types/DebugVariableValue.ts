/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const DebugVariableValue: core.serialization.Schema<
    serializers.DebugVariableValue.Raw,
    SeedTrace.DebugVariableValue
> = core.serialization
    .union("type", {
        integerValue: core.serialization.object({
            value: core.serialization.number(),
        }),
        booleanValue: core.serialization.object({
            value: core.serialization.boolean(),
        }),
        doubleValue: core.serialization.object({
            value: core.serialization.number(),
        }),
        stringValue: core.serialization.object({
            value: core.serialization.string(),
        }),
        charValue: core.serialization.object({
            value: core.serialization.string(),
        }),
        mapValue: core.serialization.lazyObject(() => serializers.DebugMapValue),
        listValue: core.serialization.object({
            value: core.serialization.list(core.serialization.lazy(() => serializers.DebugVariableValue)),
        }),
        binaryTreeNodeValue: core.serialization.lazyObject(() => serializers.BinaryTreeNodeAndTreeValue),
        singlyLinkedListNodeValue: core.serialization.lazyObject(() => serializers.SinglyLinkedListNodeAndListValue),
        doublyLinkedListNodeValue: core.serialization.lazyObject(() => serializers.DoublyLinkedListNodeAndListValue),
        undefinedValue: core.serialization.object({}),
        nullValue: core.serialization.object({}),
        genericValue: core.serialization.lazyObject(() => serializers.GenericValue),
    })
    .transform<SeedTrace.DebugVariableValue>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace DebugVariableValue {
    export type Raw =
        | DebugVariableValue.IntegerValue
        | DebugVariableValue.BooleanValue
        | DebugVariableValue.DoubleValue
        | DebugVariableValue.StringValue
        | DebugVariableValue.CharValue
        | DebugVariableValue.MapValue
        | DebugVariableValue.ListValue
        | DebugVariableValue.BinaryTreeNodeValue
        | DebugVariableValue.SinglyLinkedListNodeValue
        | DebugVariableValue.DoublyLinkedListNodeValue
        | DebugVariableValue.UndefinedValue
        | DebugVariableValue.NullValue
        | DebugVariableValue.GenericValue;

    export interface IntegerValue {
        type: "integerValue";
        value: number;
    }

    export interface BooleanValue {
        type: "booleanValue";
        value: boolean;
    }

    export interface DoubleValue {
        type: "doubleValue";
        value: number;
    }

    export interface StringValue {
        type: "stringValue";
        value: string;
    }

    export interface CharValue {
        type: "charValue";
        value: string;
    }

    export interface MapValue extends serializers.DebugMapValue.Raw {
        type: "mapValue";
    }

    export interface ListValue {
        type: "listValue";
        value: serializers.DebugVariableValue.Raw[];
    }

    export interface BinaryTreeNodeValue extends serializers.BinaryTreeNodeAndTreeValue.Raw {
        type: "binaryTreeNodeValue";
    }

    export interface SinglyLinkedListNodeValue extends serializers.SinglyLinkedListNodeAndListValue.Raw {
        type: "singlyLinkedListNodeValue";
    }

    export interface DoublyLinkedListNodeValue extends serializers.DoublyLinkedListNodeAndListValue.Raw {
        type: "doublyLinkedListNodeValue";
    }

    export interface UndefinedValue {
        type: "undefinedValue";
    }

    export interface NullValue {
        type: "nullValue";
    }

    export interface GenericValue extends serializers.GenericValue.Raw {
        type: "genericValue";
    }
}
