import { UserOffer } from "./UserOffer";

/**
 * TemplateLicenseInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Platform.Entities`
 */
export interface TemplateLicenseInfo {
    /** xs:string */
    Description?: string;
    /** xs:string */
    IdentificationCode?: string;
    /** xs:boolean */
    IsPersistent?: boolean;
    /** OSTemplateLicenseMode|xs:string|Fixed,PerCPU,PerRAM */
    LicenseMode?: string;
    /** xs:int */
    LicenseModeID?: number;
    /** xs:int */
    MinValue?: number;
    /** xs:decimal */
    Price?: number;
    /** xs:int */
    ProductID?: number;
    /** xs:int */
    TemplateLicenseID?: number;
    /** xs:int */
    Unit?: number;
    /** UserOffer */
    UserOffer?: UserOffer;
    /** xs:int */
    VMMServerTypeID?: number;
    /** xs:int */
    VirtualMachinePricingTypeID?: number;
}
