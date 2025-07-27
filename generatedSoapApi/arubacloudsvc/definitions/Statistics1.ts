
/**
 * Statistics
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface Statistics1 {
    /** xs:int */
    ActiveSession?: number;
    /** xs:dateTime */
    EventTime?: Date;
    /** xs:int */
    KbpsIn?: number;
    /** xs:int */
    KbpsOut?: number;
    /** xs:int */
    RateSession?: number;
}
