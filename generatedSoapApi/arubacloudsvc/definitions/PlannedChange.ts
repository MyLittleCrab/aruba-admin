import { BillingType } from "./BillingType";

/**
 * PlannedChange
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface PlannedChange {
    /** xs:dateTime */
    EffectiveDate?: Date;
    /** xs:int */
    NewProductID?: number;
    /** xs:int */
    Quantity?: number;
    /** xs:int */
    ResourceID?: number;
    /** Status */
    Status?: BillingType;
}
