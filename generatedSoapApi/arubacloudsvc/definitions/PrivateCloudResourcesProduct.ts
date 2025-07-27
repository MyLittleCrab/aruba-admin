import { ProductInfo } from "./ProductInfo";
import { BillingType } from "./BillingType";

/**
 * PrivateCloudResourcesProduct
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface PrivateCloudResourcesProduct {
    /** xs:int */
    DataCenterID?: number;
    /** xs:string */
    Description?: string;
    /** xs:int */
    FreeQuantity?: number;
    /** xs:int */
    ID?: number;
    /** xs:boolean */
    IsEncrypted?: boolean;
    /** xs:int */
    MaxBound?: number;
    /** xs:int */
    MinCreateBound?: number;
    /** xs:int */
    MinUpgradeBound?: number;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** ResourceType */
    ResourceType?: BillingType;
}
