import { Urls } from "./Urls";

/**
 * Value
 * @targetNSAlias `q89`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Value74 {
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
    /** xs:boolean */
    CanEditContacts?: boolean;
    /** xs:boolean */
    CanModifyTanzu?: boolean;
    /** xs:boolean */
    CanModifyVrops?: boolean;
    /** xs:int */
    Cell?: number;
    /** xs:string */
    CellDescription?: string;
    /** xs:int */
    CompanyID?: number;
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    DataCenterID?: number;
    /** xs:boolean */
    KeycloakEnabled?: boolean;
    /** xs:dateTime */
    RenewalDate?: Date;
    /** xs:decimal */
    TanzuBasicCost?: number;
    /** xs:boolean */
    TanzuModifying?: boolean;
    /** xs:decimal */
    TotalPrice?: number;
    /** xs:decimal */
    TotalPriceWithoutOffers?: number;
    /** xs:int */
    TotalVDC?: number;
    /** Urls */
    Urls?: Urls;
    /** xs:int */
    UserID?: number;
    /** xs:boolean */
    VropsModifying?: boolean;
}
