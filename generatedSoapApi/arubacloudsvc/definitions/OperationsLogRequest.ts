
/**
 * operationsLogRequest
 * @targetNSAlias `q132`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Platform.Entities`
 */
export interface OperationsLogRequest {
    /** ExecutionStatus|xs:string|All,InProgress,Completed */
    ExecutionStatus?: string;
    /** xs:dateTime */
    From?: Date;
    /** xs:int */
    ServerId?: number;
    /** xs:dateTime */
    To?: Date;
}
