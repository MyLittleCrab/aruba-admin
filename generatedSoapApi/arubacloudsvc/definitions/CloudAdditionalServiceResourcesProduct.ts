import { Descriptions } from "./Descriptions";
import { ProductInfo } from "./ProductInfo";
import { BillingType } from "./BillingType";

/**
 * CloudAdditionalServiceResourcesProduct
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface CloudAdditionalServiceResourcesProduct {
    /** Description */
    Description?: Descriptions;
    /** xs:string */
    ProductFeatures?: string;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** ResourceType */
    ResourceType?: BillingType;
}
