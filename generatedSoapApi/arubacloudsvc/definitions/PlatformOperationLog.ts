
/**
 * PlatformOperationLog
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface PlatformOperationLog {
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    JobId?: number;
    /** xs:dateTime */
    LastUpdateDate?: Date;
    /** xs:string */
    Message?: string;
    /** xs:int */
    MessageId?: number;
    /** xs:int */
    OperationId?: number;
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
    /** xs:string */
    UserDescription?: string;
    /** xs:int */
    UserId?: number;
    /** xs:string */
    Username?: string;
}
