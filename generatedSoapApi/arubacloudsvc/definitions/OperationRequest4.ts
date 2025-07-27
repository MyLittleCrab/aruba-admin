import { LoadBalancerContactsId } from "./LoadBalancerContactsId";

/**
 * operationRequest
 * @targetNSAlias `q156`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.AdditionalServices`
 */
export interface OperationRequest4 {
    /** CloudReferenceType|xs:string|All,VirtualMachine,PrivateCloud */
    CloudReferenceType?: string;
    /** xs:int */
    LanguageID?: number;
    /** xs:int */
    PricingTypeID?: number;
    /** ProductId */
    ProductId?: LoadBalancerContactsId;
}
