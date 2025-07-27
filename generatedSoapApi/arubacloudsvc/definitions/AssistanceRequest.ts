
/**
 * assistanceRequest
 * @targetNSAlias `q264`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface AssistanceRequest {
    /** xs:string */
    AssistanceRequestBody?: string;
    /** xs:int */
    AssistanceRequestID?: number;
    /** xs:string */
    AssistanceRequestSubject?: string;
    /** xs:string */
    CustomerEmail?: string;
    /** xs:string */
    CustomerFullName?: string;
    /** xs:string */
    CustomerPhoneNumber?: string;
    /** Languages|xs:string|it,en,es,de,fr,cs,pl,hu,sk */
    Language?: string;
    /** xs:int */
    VirtualMachineID?: number;
}
