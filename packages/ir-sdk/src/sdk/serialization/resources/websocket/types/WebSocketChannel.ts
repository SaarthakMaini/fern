/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { WebSocketName } from "./WebSocketName";
import { EnvironmentBaseUrlId } from "../../environment/types/EnvironmentBaseUrlId";
import { HttpPath } from "../../http/types/HttpPath";
import { HttpHeader } from "../../http/types/HttpHeader";
import { QueryParameter } from "../../http/types/QueryParameter";
import { PathParameter } from "../../http/types/PathParameter";
import { WebSocketMessage } from "./WebSocketMessage";
import { ExampleWebSocketSession } from "./ExampleWebSocketSession";
import { V2WebSocketSessionExamples } from "../../examples/types/V2WebSocketSessionExamples";
import { Declaration } from "../../commons/types/Declaration";

export const WebSocketChannel: core.serialization.ObjectSchema<
    serializers.WebSocketChannel.Raw,
    FernIr.WebSocketChannel
> = core.serialization
    .objectWithoutOptionalProperties({
        name: WebSocketName,
        displayName: core.serialization.string().optional(),
        baseUrl: EnvironmentBaseUrlId.optional(),
        path: HttpPath,
        auth: core.serialization.boolean(),
        headers: core.serialization.list(HttpHeader),
        queryParameters: core.serialization.list(QueryParameter),
        pathParameters: core.serialization.list(PathParameter),
        messages: core.serialization.list(WebSocketMessage),
        examples: core.serialization.list(ExampleWebSocketSession),
        v2Examples: V2WebSocketSessionExamples.optional(),
    })
    .extend(Declaration);

export declare namespace WebSocketChannel {
    export interface Raw extends Declaration.Raw {
        name: WebSocketName.Raw;
        displayName?: string | null;
        baseUrl?: EnvironmentBaseUrlId.Raw | null;
        path: HttpPath.Raw;
        auth: boolean;
        headers: HttpHeader.Raw[];
        queryParameters: QueryParameter.Raw[];
        pathParameters: PathParameter.Raw[];
        messages: WebSocketMessage.Raw[];
        examples: ExampleWebSocketSession.Raw[];
        v2Examples?: V2WebSocketSessionExamples.Raw | null;
    }
}
