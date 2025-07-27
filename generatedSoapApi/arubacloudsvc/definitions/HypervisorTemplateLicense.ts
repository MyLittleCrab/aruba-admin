import { TemplateLicense } from "./TemplateLicense";

/**
 * HypervisorTemplateLicense
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface HypervisorTemplateLicense {
    /** TemplateLicense */
    TemplateLicense?: TemplateLicense;
    /** xs:int */
    VirtualMachinePricingTypeID?: number;
}
