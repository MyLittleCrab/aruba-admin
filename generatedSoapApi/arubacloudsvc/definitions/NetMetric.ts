
/**
 * NetMetric
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/WcfPerformance.Entities`
 */
export interface NetMetric {
    /** xs:int */
    NetKbpsIn?: number;
    /** xs:int */
    NetKbpsOut?: number;
    /** xs:dateTime */
    Time?: Date;
}
