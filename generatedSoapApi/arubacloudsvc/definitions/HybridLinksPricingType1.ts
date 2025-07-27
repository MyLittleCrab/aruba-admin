import { HybridLinkPricingTypeDescriptions } from "./HybridLinkPricingTypeDescriptions";
import { ProductInfo } from "./ProductInfo";
import { BillingType } from "./BillingType";

/**
 * HybridLinksPricingType
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface HybridLinksPricingType1 {
    /** HybridLinkPricingTypeDescriptions */
    HybridLinkPricingTypeDescriptions?: HybridLinkPricingTypeDescriptions;
    /** xs:int */
    HyperLinkPricingTypeID?: number;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** ResourceType */
    ResourceType?: BillingType;
}
