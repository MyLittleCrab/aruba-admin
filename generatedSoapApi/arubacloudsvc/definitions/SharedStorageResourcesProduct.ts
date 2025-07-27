import { ProductInfo } from "./ProductInfo";
import { BillingType } from "./BillingType";

/**
 * SharedStorageResourcesProduct
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SharedStorage`
 */
export interface SharedStorageResourcesProduct {
    /** xs:int */
    MaxBound?: number;
    /** xs:int */
    MinCreateBound?: number;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** ResourceType */
    ResourceType?: BillingType;
    /** xs:string */
    Type?: string;
    /** xs:int */
    UpgradeBound?: number;
}
