import { ProductInfo } from "./ProductInfo";

/**
 * OpenStackFlavorResourceProduct
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface OpenStackFlavorResourceProduct {
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** xs:int */
    VirtualMachinePricingTypeID?: number;
}
