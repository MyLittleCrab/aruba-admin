import { BillingType } from "./BillingType";
import { UserOffer } from "./UserOffer";

/**
 * ProductInfo
 * @targetNSAlias `q8`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common.Entities`
 */
export interface ProductInfo {
    /** BillingType */
    BillingType?: BillingType;
    /** xs:decimal */
    Price?: number;
    /** xs:int */
    ProductID?: number;
    /** UserOffer */
    UserOffer?: UserOffer;
}
