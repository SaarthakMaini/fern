/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core/index.js";
import * as SeedPagination from "../../../index.js";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index.js";

export declare namespace Users {
    export interface Options {
        environment: core.Supplier<string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
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

export class Users {
    constructor(protected readonly _options: Users.Options) {}

    /**
     * @param {SeedPagination.ListUsernamesRequestCustom} request
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.users.listUsernamesCustom({
     *         starting_after: "starting_after"
     *     })
     */
    public listUsernamesCustom(
        request: SeedPagination.ListUsernamesRequestCustom = {},
        requestOptions?: Users.RequestOptions,
    ): core.HttpResponsePromise<SeedPagination.UsernameCursor> {
        return core.HttpResponsePromise.fromPromise(this.__listUsernamesCustom(request, requestOptions));
    }

    private async __listUsernamesCustom(
        request: SeedPagination.ListUsernamesRequestCustom = {},
        requestOptions?: Users.RequestOptions,
    ): Promise<core.WithRawResponse<SeedPagination.UsernameCursor>> {
        const { starting_after: startingAfter } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (startingAfter != null) {
            _queryParams["starting_after"] = startingAfter;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/users",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/pagination-custom",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/pagination-custom/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as SeedPagination.UsernameCursor, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedPaginationError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedPaginationError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedPaginationTimeoutError("Timeout exceeded when calling GET /users.");
            case "unknown":
                throw new errors.SeedPaginationError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
