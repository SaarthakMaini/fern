/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core/index.js";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index.js";

export declare namespace Optional {
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

export class Optional {
    constructor(protected readonly _options: Optional.Options) {}

    /**
     * @param {Record<string, unknown>} request
     * @param {Optional.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.optional.sendOptionalBody({
     *         "string": {
     *             "key": "value"
     *         }
     *     })
     */
    public sendOptionalBody(
        request?: Record<string, unknown>,
        requestOptions?: Optional.RequestOptions,
    ): core.HttpResponsePromise<string> {
        return core.HttpResponsePromise.fromPromise(this.__sendOptionalBody(request, requestOptions));
    }

    private async __sendOptionalBody(
        request?: Record<string, unknown>,
        requestOptions?: Optional.RequestOptions,
    ): Promise<core.WithRawResponse<string>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "send-optional-body",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/optional",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/optional/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request != null ? request : undefined,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as string, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedObjectsWithImportsError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedObjectsWithImportsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedObjectsWithImportsTimeoutError(
                    "Timeout exceeded when calling POST /send-optional-body.",
                );
            case "unknown":
                throw new errors.SeedObjectsWithImportsError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }
}
