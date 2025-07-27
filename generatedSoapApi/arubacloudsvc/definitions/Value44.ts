import { CompanySettings } from "./CompanySettings";
import { OtpDetails } from "./OtpDetails";
import { Permission } from "./Permission";
import { UserContacts } from "./UserContacts";
import { UserServiceAvailabilitySettingsList } from "./UserServiceAvailabilitySettingsList";
import { UserSettings } from "./UserSettings";

/**
 * Value
 * @targetNSAlias `q53`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Value44 {
    /** xs:int */
    CompanyID?: number;
    /** xs:string */
    CompanyName?: string;
    /** CompanySettings */
    CompanySettings?: CompanySettings;
    /** Languages|xs:string|it,en,es,de,fr,cs,pl,hu,sk */
    DefaultLanguage?: string;
    /** xs:boolean */
    IsCompanyRoot?: boolean;
    /** xs:dateTime */
    LoginAfterResetPwd?: Date;
    /** xs:boolean */
    OtpActive?: boolean;
    /** OtpDetails */
    OtpDetails?: OtpDetails;
    /** xs:boolean */
    OtpVisibility?: boolean;
    /** Permission */
    Permission?: Permission;
    /** xs:string */
    RootPrefixCode?: string;
    /** UserContacts */
    UserContacts?: UserContacts;
    /** xs:int */
    UserID?: number;
    /** xs:string */
    UserName?: string;
    /** Roles|xs:string|Anonymous,Admin,User,Operator */
    UserRole?: string;
    /** UserServiceAvailabilitySettingsList */
    UserServiceAvailabilitySettingsList?: UserServiceAvailabilitySettingsList;
    /** UserSettings */
    UserSettings?: UserSettings;
    /** UserStatus|xs:string|Active,Suspended,Deleted */
    UserStatus?: string;
    /** UserTypes|xs:string|OnlineUser,CommercialUser */
    UserType?: string;
}
