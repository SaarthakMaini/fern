/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index.js";
import * as core from "../../../../core/index.js";

export type Error =
    | SeedTrace.playlist.getPlaylist.Error.PlaylistIdNotFoundError
    | SeedTrace.playlist.getPlaylist.Error.UnauthorizedError
    | SeedTrace.playlist.getPlaylist.Error._Unknown;

export namespace Error {
    export interface PlaylistIdNotFoundError extends _Utils {
        errorName: "PlaylistIdNotFoundError";
        content: SeedTrace.PlaylistIdNotFoundErrorBody;
    }

    export interface UnauthorizedError extends _Utils {
        errorName: "UnauthorizedError";
    }

    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.playlist.getPlaylist.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        playlistIdNotFoundError: (value: SeedTrace.PlaylistIdNotFoundErrorBody) => _Result;
        unauthorizedError: () => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    playlistIdNotFoundError: (
        value: SeedTrace.PlaylistIdNotFoundErrorBody,
    ): SeedTrace.playlist.getPlaylist.Error.PlaylistIdNotFoundError => {
        return {
            content: value,
            errorName: "PlaylistIdNotFoundError",
            _visit: function <_Result>(
                this: SeedTrace.playlist.getPlaylist.Error.PlaylistIdNotFoundError,
                visitor: SeedTrace.playlist.getPlaylist.Error._Visitor<_Result>,
            ) {
                return SeedTrace.playlist.getPlaylist.Error._visit(this, visitor);
            },
        };
    },

    unauthorizedError: (): SeedTrace.playlist.getPlaylist.Error.UnauthorizedError => {
        return {
            errorName: "UnauthorizedError",
            _visit: function <_Result>(
                this: SeedTrace.playlist.getPlaylist.Error.UnauthorizedError,
                visitor: SeedTrace.playlist.getPlaylist.Error._Visitor<_Result>,
            ) {
                return SeedTrace.playlist.getPlaylist.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): SeedTrace.playlist.getPlaylist.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: SeedTrace.playlist.getPlaylist.Error._Unknown,
                visitor: SeedTrace.playlist.getPlaylist.Error._Visitor<_Result>,
            ) {
                return SeedTrace.playlist.getPlaylist.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.playlist.getPlaylist.Error,
        visitor: SeedTrace.playlist.getPlaylist.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            case "PlaylistIdNotFoundError":
                return visitor.playlistIdNotFoundError(value.content);
            case "UnauthorizedError":
                return visitor.unauthorizedError();
            default:
                return visitor._other(value as any);
        }
    },
} as const;
