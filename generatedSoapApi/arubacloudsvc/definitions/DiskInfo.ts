
/**
 * DiskInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/WcfPerformance.Entities`
 */
export interface DiskInfo {
    /** xs:long */
    Capacity?: number;
    /** xs:string */
    DiskPath?: string;
    /** xs:long */
    FreeSpace?: number;
    /** xs:long */
    UsedSpace?: number;
}
