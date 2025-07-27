
/** SetEnqueueServerSnapshot */
export interface SetEnqueueServerSnapshot {
    /** xs:int */
    serverId?: number;
    /** SnapshotOperationTypes|xs:string|Create,Delete,Restore */
    snapshotOperation?: string;
}
