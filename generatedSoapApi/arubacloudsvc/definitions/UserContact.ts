
/**
 * UserContact
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface UserContact {
    /** ContactTypes|xs:string|Email,MobileNumber */
    ContactType?: string;
    /** xs:boolean */
    ContactValidated?: boolean;
    /** xs:int */
    UserContactID?: number;
    /** xs:string */
    Value?: string;
}
