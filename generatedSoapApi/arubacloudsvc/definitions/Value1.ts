import { Statistics } from "./Statistics";

/**
 * Value
 * @targetNSAlias `q3`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface Value1 {
    /** xs:int */
    CompanyID?: number;
    /** xs:int */
    DataCenterID?: number;
    /** xs:int */
    LoadBalancerID?: number;
    /** xs:int */
    LoadBalancerRuleID?: number;
    /** xs:string */
    Name?: string;
    /** Statistics */
    Statistics?: Statistics;
    /** xs:int */
    UserID?: number;
}
