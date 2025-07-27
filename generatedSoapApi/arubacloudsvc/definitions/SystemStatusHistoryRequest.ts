
/**
 * systemStatusHistoryRequest
 * @targetNSAlias `q151`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface SystemStatusHistoryRequest {
    /** xs:dateTime */
    FromDate?: Date;
    /** GroupBy|xs:string|None,Hour,Day */
    GroupBy?: string;
    /** MonitoringResourceType|xs:string|All,Cpu,Ram,Disk */
    MonitoringResource?: string;
    /** xs:int */
    ServerID?: number;
    /** xs:dateTime */
    ToDate?: Date;
}
