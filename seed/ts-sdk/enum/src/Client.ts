/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core/index.js";
import { InlinedRequest } from "./api/resources/inlinedRequest/client/Client.js";
import { PathParam } from "./api/resources/pathParam/client/Client.js";
import { QueryParam } from "./api/resources/queryParam/client/Client.js";

export declare namespace SeedEnumClient {
    export interface Options {
        environment: core.Supplier<string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class SeedEnumClient {
    protected _inlinedRequest: InlinedRequest | undefined;
    protected _pathParam: PathParam | undefined;
    protected _queryParam: QueryParam | undefined;

    constructor(protected readonly _options: SeedEnumClient.Options) {}

    public get inlinedRequest(): InlinedRequest {
        return (this._inlinedRequest ??= new InlinedRequest(this._options));
    }

    public get pathParam(): PathParam {
        return (this._pathParam ??= new PathParam(this._options));
    }

    public get queryParam(): QueryParam {
        return (this._queryParam ??= new QueryParam(this._options));
    }
}
