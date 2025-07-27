import { AddonLicenses } from "./AddonLicenses";
import { LicenseKeys } from "./LicenseKeys";

/**
 * PleskLicense
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface PleskLicense {
    /** AddonLicenses */
    AddonLicenses?: AddonLicenses;
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:string */
    LicenseCode?: string;
    /** xs:string */
    LicenseDescription?: string;
    /** xs:int */
    LicenseID?: number;
    /** LicenseKeys */
    LicenseKeys?: LicenseKeys;
    /** xs:int */
    LicensePleskTypeID?: number;
    /** LicenseStatusTypes|xs:string|All,Creating,Active,Deleting */
    LicenseStatus?: string;
    /** xs:int */
    ProductID?: number;
    /** xs:int */
    Quantity?: number;
    /** xs:int */
    ResourceID?: number;
}
