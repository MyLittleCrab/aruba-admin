import { BillingType } from "./BillingType";

/**
 * BoundsConfiguration
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface BoundsConfiguration {
    /** xs:int */
    MaxBoundValue?: number;
    /** xs:int */
    MinBoundValue?: number;
    /** ResourceType */
    ResourceType?: BillingType;
}
