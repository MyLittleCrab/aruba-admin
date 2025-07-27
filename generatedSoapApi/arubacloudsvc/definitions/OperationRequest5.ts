import { LoadBalancerContactsId } from "./LoadBalancerContactsId";

/**
 * operationRequest
 * @targetNSAlias `q158`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.AdditionalServices`
 */
export interface OperationRequest5 {
    /** xs:int */
    CloudReferenceId?: number;
    /** CloudReferenceType|xs:string|All,VirtualMachine,PrivateCloud */
    CloudReferenceType?: string;
    /** xs:int */
    LanguageID?: number;
    /** ProductId */
    ProductId?: LoadBalancerContactsId;
}
