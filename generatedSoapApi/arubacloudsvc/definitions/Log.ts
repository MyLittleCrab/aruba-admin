
/**
 * Log
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Log {
    /** xs:int */
    JobId?: number;
    /** xs:dateTime */
    LogDate?: Date;
    /** xs:int */
    LogId?: number;
    /** xs:dateTime */
    LogLastUpdateDate?: Date;
    /** xs:string */
    Message?: string;
    /** xs:int */
    MessageId?: number;
    /** xs:string */
    OperationName?: string;
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
