import { AdditionalServices } from "./AdditionalServices";

/**
 * operationRequest
 * @targetNSAlias `q246`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.AdditionalServices`
 */
export interface OperationRequest17 {
    /** AdditionalServices */
    AdditionalServices?: AdditionalServices;
    /** xs:int */
    CloudReferenceId?: number;
    /** CloudReferenceType|xs:string|All,VirtualMachine,PrivateCloud */
    CloudReferenceType?: string;
    /** xs:string */
    EmailAddress?: string;
    /** xs:string */
    TelephoneNumber?: string;
    /** xs:int */
    UserId?: number;
}
