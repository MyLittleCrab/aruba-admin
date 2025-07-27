
/** GetUserAssistanceRequests */
export interface GetUserAssistanceRequests {
    /** xs:dateTime */
    DateStart?: Date;
    /** xs:dateTime */
    DateEnd?: Date;
    /** AssistanceRequestStatus|xs:string|Waiting,DeliveryError,InCharge,Rejected,Estimated,QuotationExpired,QuotationAccepted,QuotationRefused,Completed,Expired,Draft */
    status?: string;
}
