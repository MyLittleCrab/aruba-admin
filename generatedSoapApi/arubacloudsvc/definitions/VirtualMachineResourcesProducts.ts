import { ProductInfo } from "./ProductInfo";
import { BillingType } from "./BillingType";
import { LoadBalancerContactsId } from "./LoadBalancerContactsId";
import { TemplateLicense } from "./TemplateLicense";

/**
 * VirtualMachineResourcesProducts
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface VirtualMachineResourcesProducts {
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** ResourceType */
    ResourceType?: BillingType;
    /** TemplateIDs */
    TemplateIDs?: LoadBalancerContactsId;
    /** TemplateLicense */
    TemplateLicense?: TemplateLicense;
    /** xs:int */
    VMMServerTypeID?: number;
    /** xs:int */
    VirtualMachinePricingTypeID?: number;
}
