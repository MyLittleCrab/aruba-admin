
/**
 * AssistanceQuotation
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface AssistanceQuotation {
    /** xs:dateTime */
    LastModifiedDate?: Date;
    /** xs:dateTime */
    QuotationExpiryDate?: Date;
    /** xs:int */
    QuotationHours?: number;
    /** xs:int */
    QuotationID?: number;
    /** xs:string */
    QuotationNote?: string;
    /** xs:decimal */
    QuotationPrice?: number;
    /** QuotationType|xs:string|EntireEstimate,TimeMaterial */
    QuotationType?: string;
}
