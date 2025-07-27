
/**
 * OtpDetails
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface OtpDetails {
    /** xs:string */
    ActivationCode?: string;
    /** xs:int */
    OtpAttempsLeft?: number;
    /** xs:dateTime */
    StartDate?: Date;
}
