import { UserOffer } from "./UserOffer";

/**
 * License
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface License {
    /** xs:int */
    BillingTypeId?: number;
    /** xs:string */
    Description?: string;
    /** xs:boolean */
    IsPersistent?: boolean;
    /** OSTemplateLicenseMode|xs:string|Fixed,PerCPU,PerRAM */
    LicenseMode?: string;
    /** xs:decimal */
    Price?: number;
    /** xs:int */
    ProductID?: number;
    /** xs:int */
    Quantity?: number;
    /** xs:int */
    ResourceID?: number;
    /** xs:int */
    TemplateLicenseID?: number;
    /** xs:int */
    TimeUnitInHours?: number;
    /** xs:int */
    Unit?: number;
    /** UserOffer */
    UserOffer?: UserOffer;
}
