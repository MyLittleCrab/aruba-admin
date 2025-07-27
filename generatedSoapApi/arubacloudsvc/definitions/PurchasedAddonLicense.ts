
/**
 * PurchasedAddonLicense
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface PurchasedAddonLicense {
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:string */
    LicenseDescription?: string;
    /** xs:int */
    LicenseID?: number;
    /** xs:int */
    LicensePleskTypeAddonID?: number;
    /** LicenseStatusTypes|xs:string|All,Creating,Active,Deleting */
    LicenseStatus?: string;
    /** xs:int */
    ProductID?: number;
    /** xs:int */
    Quantity?: number;
    /** xs:int */
    ResourceID?: number;
}
