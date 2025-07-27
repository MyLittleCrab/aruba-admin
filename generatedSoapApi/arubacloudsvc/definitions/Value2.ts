import { RuleNotificationEvents } from "./RuleNotificationEvents";

/**
 * Value
 * @targetNSAlias `q4`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface Value2 {
    /** xs:int */
    CompanyID?: number;
    /** xs:int */
    DataCenterID?: number;
    /** xs:int */
    LoadBalancerID?: number;
    /** xs:string */
    Name?: string;
    /** RuleNotificationEvents */
    RuleNotificationEvents?: RuleNotificationEvents;
    /** xs:int */
    UserID?: number;
}
