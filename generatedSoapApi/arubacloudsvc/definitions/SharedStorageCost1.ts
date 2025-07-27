import { OsTemplateLicensesCost } from "./OsTemplateLicensesCost";

/**
 * SharedStorageCost
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface SharedStorageCost1 {
    /** xs:decimal */
    TotalHourlyCost?: number;
    /** xs:int */
    SharedStorageId?: number;
    /** SharedStorageResource */
    SharedStorageResource?: OsTemplateLicensesCost;
}
