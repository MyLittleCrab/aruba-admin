
/**
 * PrivateCloudOrganization
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface PrivateCloudOrganization {
    /** xs:string */
    Email?: string;
    /** xs:string */
    Org?: string;
    /** xs:int */
    PrivateCloudOrganizationID?: number;
    /** xs:string */
    TanzuBasic?: string;
    /** xs:string */
    TelephoneNumber?: string;
    /** xs:boolean */
    TwoFactorAuth?: boolean;
    /** xs:boolean */
    UserCanEdit?: boolean;
    /** xs:string */
    Username?: string;
    /** xs:string */
    Vrops?: string;
}
