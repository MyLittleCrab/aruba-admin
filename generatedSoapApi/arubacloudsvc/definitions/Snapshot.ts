
/**
 * Snapshot
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Snapshot {
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:dateTime */
    ExpirationDate?: Date;
    /** SnapshotStatusTypes|xs:string|Creating,Active,Deleted,Restored */
    Status?: string;
}
