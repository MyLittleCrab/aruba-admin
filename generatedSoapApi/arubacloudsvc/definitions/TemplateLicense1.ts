import { UserOffer } from "./UserOffer";

/**
 * TemplateLicense
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface TemplateLicense1 {
    /** xs:int */
    BillingTypeId?: number;
    /** xs:int */
    DefaultValue?: number;
    /** xs:string */
    Description?: string;
    /** xs:boolean */
    IsPersistent?: boolean;
    /** OSTemplateLicenseMode|xs:string|Fixed,PerCPU,PerRAM */
    LicenseMode?: string;
    /** xs:int */
    MinValue?: number;
    /** xs:decimal */
    Price?: number;
    /** xs:int */
    ProductID?: number;
    /** xs:int */
    TemplateLicenseID?: number;
    /** xs:int */
    TimeUnitInHours?: number;
    /** xs:int */
    Unit?: number;
    /** UserOffer */
    UserOffer?: UserOffer;
}
