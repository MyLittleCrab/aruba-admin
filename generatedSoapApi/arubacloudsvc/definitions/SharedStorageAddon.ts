import { BillingType } from "./BillingType";

/**
 * SharedStorageAddon
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SharedStorage`
 */
export interface SharedStorageAddon {
    /** AddonType */
    AddonType?: BillingType;
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    DataCenterID?: number;
    /** xs:dateTime */
    DeletionDate?: Date;
    /** xs:dateTime */
    ModifiedDate?: Date;
    /** xs:int */
    SharedStorageAddonID?: number;
    /** Status */
    Status?: BillingType;
    /** xs:string */
    Value?: string;
}
