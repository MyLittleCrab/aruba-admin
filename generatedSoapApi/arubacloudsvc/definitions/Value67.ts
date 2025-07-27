import { AssistanceQuotation } from "./AssistanceQuotation";

/**
 * Value
 * @targetNSAlias `q81`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Value67 {
    /** AssistanceQuotation */
    AssistanceQuotation?: AssistanceQuotation;
    /** xs:string */
    AssistanceRequestBody?: string;
    /** AssistanceRequestCurrency|xs:string|EUR,USD,CZK,PLN,HUF */
    AssistanceRequestCurrency?: string;
    /** xs:int */
    AssistanceRequestID?: number;
    /** AssistanceRequestStatus|xs:string|Waiting,DeliveryError,InCharge,Rejected,Estimated,QuotationExpired,QuotationAccepted,QuotationRefused,Completed,Expired,Draft */
    AssistanceRequestStatus?: string;
    /** xs:string */
    AssistanceRequestSubject?: string;
    /** xs:int */
    CompanyID?: number;
    /** xs:string */
    CompanyName?: string;
    /** xs:string */
    CustomerFullName?: string;
    /** xs:string */
    CustomerMail?: string;
    /** xs:string */
    CustomerPhoneNumber?: string;
    /** xs:int */
    DataCenterID?: number;
    /** Languages|xs:string|it,en,es,de,fr,cs,pl,hu,sk */
    Language?: string;
    /** xs:dateTime */
    LastModifiedDate?: Date;
    /** xs:int */
    ResourceID?: number;
    /** xs:decimal */
    UnitPrice?: number;
    /** xs:int */
    UserID?: number;
    /** xs:int */
    VirtualMachineID?: number;
}
