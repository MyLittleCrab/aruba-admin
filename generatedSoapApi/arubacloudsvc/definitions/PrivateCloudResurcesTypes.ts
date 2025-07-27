import { CloudAdditionalServiceResourcesProducts } from "./CloudAdditionalServiceResourcesProducts";
import { PrivateCloudResourcesProducts } from "./PrivateCloudResourcesProducts";
import { ProductInfo } from "./ProductInfo";

/**
 * PrivateCloudResurcesTypes
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface PrivateCloudResurcesTypes {
    /** CloudAdditionalServiceResourcesProducts */
    CloudAdditionalServiceResourcesProducts?: CloudAdditionalServiceResourcesProducts;
    /** xs:decimal */
    MinimumCpuRamRatio?: number;
    /** xs:int */
    PrivateCloudPricingTypeID?: number;
    /** PrivateCloudResourcesProducts */
    PrivateCloudResourcesProducts?: PrivateCloudResourcesProducts;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** xs:string */
    TypeCode?: string;
}
