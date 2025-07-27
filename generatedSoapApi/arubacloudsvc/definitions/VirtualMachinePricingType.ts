import { BillingType } from "./BillingType";
import { HybridLinkPricingTypeDescriptions } from "./HybridLinkPricingTypeDescriptions";
import { ProductInfo } from "./ProductInfo";
import { VmmServerType } from "./VmmServerType";

/**
 * VirtualMachinePricingType
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface VirtualMachinePricingType {
    /** BillingType */
    BillingType?: BillingType;
    /** Descriptions */
    Descriptions?: HybridLinkPricingTypeDescriptions;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** ResourceType */
    ResourceType?: BillingType;
    /** VMMServerType */
    VMMServerType?: VmmServerType;
    /** xs:int */
    VirtualMachinePricingTypeID?: number;
}
