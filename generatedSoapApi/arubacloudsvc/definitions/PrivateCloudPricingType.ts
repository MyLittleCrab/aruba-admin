import { HybridLinkPricingTypeDescriptions } from "./HybridLinkPricingTypeDescriptions";
import { ProductInfo } from "./ProductInfo";

/**
 * PrivateCloudPricingType
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface PrivateCloudPricingType {
    /** xs:boolean */
    Available?: boolean;
    /** Descriptions */
    Descriptions?: HybridLinkPricingTypeDescriptions;
    /** xs:int */
    PrivateCloudPricingTypeID?: number;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** xs:string */
    SubTypeCode?: string;
    /** xs:string */
    TypeCode?: string;
}
