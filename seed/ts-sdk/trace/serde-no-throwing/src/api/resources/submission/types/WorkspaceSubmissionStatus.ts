/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index.js";

export type WorkspaceSubmissionStatus =
    | SeedTrace.WorkspaceSubmissionStatus.Stopped
    | SeedTrace.WorkspaceSubmissionStatus.Errored
    | SeedTrace.WorkspaceSubmissionStatus.Running
    | SeedTrace.WorkspaceSubmissionStatus.Ran
    | SeedTrace.WorkspaceSubmissionStatus.Traced;

export namespace WorkspaceSubmissionStatus {
    export interface Stopped {
        type: "stopped";
    }

    export interface Errored {
        type: "errored";
        value: SeedTrace.ErrorInfo;
    }

    export interface Running {
        type: "running";
        value: SeedTrace.RunningSubmissionState;
    }

    export interface Ran extends SeedTrace.WorkspaceRunDetails {
        type: "ran";
    }

    export interface Traced extends SeedTrace.WorkspaceRunDetails {
        type: "traced";
    }
}
