import { Loads } from "./Loads";

/**
 * Value
 * @targetNSAlias `q1`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface Value {
    /** xs:int */
    CompanyID?: number;
    /** xs:int */
    DataCenterID?: number;
    /** xs:int */
    LoadBalancerID?: number;
    /** Loads */
    Loads?: Loads;
    /** xs:string */
    Name?: string;
    /** xs:int */
    UserID?: number;
}
