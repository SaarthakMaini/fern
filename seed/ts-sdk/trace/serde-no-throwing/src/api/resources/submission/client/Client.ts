/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as SeedTrace from "../../../index.js";
import * as serializers from "../../../../serialization/index.js";
import urlJoin from "url-join";

export declare namespace Submission {
    export interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-Random-Header header */
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Random-Header header */
        xRandomHeader?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

/**
 * Responsible for spinning up and spinning down execution.
 */
export class Submission {
    constructor(protected readonly _options: Submission.Options = {}) {}

    /**
     * Returns sessionId and execution server URL for session. Spins up server.
     *
     * @param {SeedTrace.Language} language
     * @param {Submission.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.submission.createExecutionSession("JAVA")
     */
    public createExecutionSession(
        language: SeedTrace.Language,
        requestOptions?: Submission.RequestOptions,
    ): core.HttpResponsePromise<
        core.APIResponse<SeedTrace.ExecutionSessionResponse, SeedTrace.submission.createExecutionSession.Error>
    > {
        return core.HttpResponsePromise.fromPromise(this.__createExecutionSession(language, requestOptions));
    }

    private async __createExecutionSession(
        language: SeedTrace.Language,
        requestOptions?: Submission.RequestOptions,
    ): Promise<
        core.WithRawResponse<
            core.APIResponse<SeedTrace.ExecutionSessionResponse, SeedTrace.submission.createExecutionSession.Error>
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedTraceEnvironment.Prod,
                `/sessions/create-session/${encodeURIComponent(serializers.Language.jsonOrThrow(language, { omitUndefined: true }))}`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: {
                    ok: true,
                    body: serializers.ExecutionSessionResponse.parseOrThrow(_response.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        skipValidation: true,
                        breadcrumbsPrefix: ["response"],
                    }),
                    headers: _response.headers,
                    rawResponse: _response.rawResponse,
                },
                rawResponse: _response.rawResponse,
            };
        }

        return {
            data: {
                ok: false,
                error: SeedTrace.submission.createExecutionSession.Error._unknown(_response.error),
                rawResponse: _response.rawResponse,
            },
            rawResponse: _response.rawResponse,
        };
    }

    /**
     * Returns execution server URL for session. Returns empty if session isn't registered.
     *
     * @param {string} sessionId
     * @param {Submission.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.submission.getExecutionSession("sessionId")
     */
    public getExecutionSession(
        sessionId: string,
        requestOptions?: Submission.RequestOptions,
    ): core.HttpResponsePromise<
        core.APIResponse<SeedTrace.ExecutionSessionResponse | undefined, SeedTrace.submission.getExecutionSession.Error>
    > {
        return core.HttpResponsePromise.fromPromise(this.__getExecutionSession(sessionId, requestOptions));
    }

    private async __getExecutionSession(
        sessionId: string,
        requestOptions?: Submission.RequestOptions,
    ): Promise<
        core.WithRawResponse<
            core.APIResponse<
                SeedTrace.ExecutionSessionResponse | undefined,
                SeedTrace.submission.getExecutionSession.Error
            >
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedTraceEnvironment.Prod,
                `/sessions/${encodeURIComponent(sessionId)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: {
                    ok: true,
                    body: serializers.submission.getExecutionSession.Response.parseOrThrow(_response.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        skipValidation: true,
                        breadcrumbsPrefix: ["response"],
                    }),
                    headers: _response.headers,
                    rawResponse: _response.rawResponse,
                },
                rawResponse: _response.rawResponse,
            };
        }

        return {
            data: {
                ok: false,
                error: SeedTrace.submission.getExecutionSession.Error._unknown(_response.error),
                rawResponse: _response.rawResponse,
            },
            rawResponse: _response.rawResponse,
        };
    }

    /**
     * Stops execution session.
     *
     * @param {string} sessionId
     * @param {Submission.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.submission.stopExecutionSession("sessionId")
     */
    public stopExecutionSession(
        sessionId: string,
        requestOptions?: Submission.RequestOptions,
    ): core.HttpResponsePromise<core.APIResponse<void, SeedTrace.submission.stopExecutionSession.Error>> {
        return core.HttpResponsePromise.fromPromise(this.__stopExecutionSession(sessionId, requestOptions));
    }

    private async __stopExecutionSession(
        sessionId: string,
        requestOptions?: Submission.RequestOptions,
    ): Promise<core.WithRawResponse<core.APIResponse<void, SeedTrace.submission.stopExecutionSession.Error>>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedTraceEnvironment.Prod,
                `/sessions/stop/${encodeURIComponent(sessionId)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: {
                    ok: true,
                    body: undefined,
                    headers: _response.headers,
                    rawResponse: _response.rawResponse,
                },
                rawResponse: _response.rawResponse,
            };
        }

        return {
            data: {
                ok: false,
                error: SeedTrace.submission.stopExecutionSession.Error._unknown(_response.error),
                rawResponse: _response.rawResponse,
            },
            rawResponse: _response.rawResponse,
        };
    }

    /**
     * @param {Submission.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.submission.getExecutionSessionsState()
     */
    public getExecutionSessionsState(
        requestOptions?: Submission.RequestOptions,
    ): core.HttpResponsePromise<
        core.APIResponse<
            SeedTrace.GetExecutionSessionStateResponse,
            SeedTrace.submission.getExecutionSessionsState.Error
        >
    > {
        return core.HttpResponsePromise.fromPromise(this.__getExecutionSessionsState(requestOptions));
    }

    private async __getExecutionSessionsState(
        requestOptions?: Submission.RequestOptions,
    ): Promise<
        core.WithRawResponse<
            core.APIResponse<
                SeedTrace.GetExecutionSessionStateResponse,
                SeedTrace.submission.getExecutionSessionsState.Error
            >
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedTraceEnvironment.Prod,
                "/sessions/execution-sessions-state",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: {
                    ok: true,
                    body: serializers.GetExecutionSessionStateResponse.parseOrThrow(_response.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        skipValidation: true,
                        breadcrumbsPrefix: ["response"],
                    }),
                    headers: _response.headers,
                    rawResponse: _response.rawResponse,
                },
                rawResponse: _response.rawResponse,
            };
        }

        return {
            data: {
                ok: false,
                error: SeedTrace.submission.getExecutionSessionsState.Error._unknown(_response.error),
                rawResponse: _response.rawResponse,
            },
            rawResponse: _response.rawResponse,
        };
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
