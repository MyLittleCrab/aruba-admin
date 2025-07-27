import { Surveyanswers } from "./Surveyanswers";

/** SetEnqueueServerDeletion */
export interface SetEnqueueServerDeletion {
    /** xs:int */
    serverId?: number;
    /** xs:boolean */
    removeIP?: boolean;
    /** xs:boolean */
    now?: boolean;
    /** xs:boolean */
    migrateIP?: boolean;
    /** surveyanswers */
    surveyanswers?: Surveyanswers;
}
