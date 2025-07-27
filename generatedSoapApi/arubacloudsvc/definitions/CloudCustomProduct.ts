import { PlannedChange } from "./PlannedChange";
import { ProductInfo } from "./ProductInfo";
import { BillingType } from "./BillingType";

/**
 * CloudCustomProduct
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface CloudCustomProduct {
    /** PlannedChange */
    PlannedChange?: PlannedChange;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** xs:int */
    Quantity?: number;
    /** xs:int */
    ResourceID?: number;
    /** ResourceType */
    ResourceType?: BillingType;
    /** Status */
    Status?: BillingType;
    /** xs:string */
    CustomProductName?: string;
}
