import { BillingType } from "./BillingType";
import { ProductInfo } from "./ProductInfo";
import { TemplateLicense } from "./TemplateLicense";

/**
 * HypervisorTemplateLicensesDetails
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface HypervisorTemplateLicensesDetails {
    /** xs:int */
    DefaultValue?: number;
    /** xs:string */
    Description?: string;
    /** xs:boolean */
    IsPersistent?: boolean;
    /** LicenseMode */
    LicenseMode?: BillingType;
    /** xs:int */
    MinValue?: number;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** TemplateLicense */
    TemplateLicense?: TemplateLicense;
    /** xs:int */
    Unit?: number;
    /** xs:int */
    VirtualMachinePricingTypeID?: number;
}
