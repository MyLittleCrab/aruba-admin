import { SharedStorageResourcesProduct } from "./SharedStorageResourcesProduct";
import { BillingType } from "./BillingType";

/**
 * SharedStorageDetailsResource
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SharedStorage`
 */
export interface SharedStorageDetailsResource {
    /** xs:int */
    DataCenterID?: number;
    /** xs:int */
    Quantity?: number;
    /** xs:int */
    ResourceID?: number;
    /** ResourceProduct */
    ResourceProduct?: SharedStorageResourcesProduct;
    /** ResourceType */
    ResourceType?: BillingType;
}
