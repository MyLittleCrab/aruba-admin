import { OsTemplateLicensesCost } from "./OsTemplateLicensesCost";

/**
 * VirtualDiskCost
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface VirtualDiskCost {
    /** xs:decimal */
    TotalHourlyCost?: number;
    /** Values */
    Values?: OsTemplateLicensesCost;
}
