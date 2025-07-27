
/**
 * Job
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Job {
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    JobId?: number;
    /** xs:dateTime */
    LastUpdateDate?: Date;
    /** xs:int */
    LicenseId?: number;
    /** xs:string */
    OperationName?: string;
    /** xs:int */
    Progress?: number;
    /** xs:int */
    ResourceId?: number;
    /** xs:string */
    ResourceValue?: string;
    /** xs:int */
    ServerId?: number;
    /** xs:string */
    ServerName?: string;
    /** JobStatus|xs:string|Waiting,Running,Pause,Error,Completed,ReadyForCommit */
    Status?: string;
    /** xs:int */
    UserId?: number;
    /** xs:string */
    Username?: string;
}
