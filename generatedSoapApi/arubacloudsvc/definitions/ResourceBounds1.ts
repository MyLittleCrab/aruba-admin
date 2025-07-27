import { BillingType } from "./BillingType";

/**
 * ResourceBounds
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface ResourceBounds1 {
    /** xs:int */
    Default?: number;
    /** xs:int */
    Max?: number;
    /** xs:int */
    Min?: number;
    /** ResourceType */
    ResourceType?: BillingType;
}
