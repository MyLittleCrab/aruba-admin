import { PlannedChange } from "./PlannedChange";
import { ProductInfo } from "./ProductInfo";
import { BillingType } from "./BillingType";
import { Descriptions } from "./Descriptions";

/**
 * AdditionalService
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface AdditionalService {
    /** PlannedChange */
    PlannedChange?: PlannedChange;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** xs:int */
    Quantity?: number;
    /** xs:int */
    ResourceID?: number;
    /** ResourceType */
    ResourceType?: BillingType;
    /** Status */
    Status?: BillingType;
    /** Descriptions */
    Descriptions?: Descriptions;
    /** xs:string */
    ProductFeatures?: string;
}
