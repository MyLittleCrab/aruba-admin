import { CompanyBanners } from "./CompanyBanners";
import { DataCenterSettings1 } from "./DataCenterSettings1";
import { SupportSettings1 } from "./SupportSettings1";

/**
 * CompanySettings
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface CompanySettings {
    /** xs:int */
    CompanyID?: number;
    /** xs:string */
    Name?: string;
    /** xs:string */
    PrefixCode?: string;
    /** xs:string */
    RootPrefixCode?: string;
    /** xs:boolean */
    CartCompanySsoEnabled?: boolean;
    /** xs:string */
    CartCompanyUrl?: string;
    /** xs:string */
    ClientAreaCompanyUrl?: string;
    /** CompanyBanners */
    CompanyBanners?: CompanyBanners;
    /** xs:int */
    CreditDisplayMode?: number;
    /** xs:boolean */
    CustomerAreaSsoEnabled?: boolean;
    /** xs:string */
    CustomerCareEmailAddress?: string;
    /** DataCenterSettings */
    DataCenterSettings?: DataCenterSettings1;
    /** xs:boolean */
    HttpsEnabled?: boolean;
    /** xs:string */
    KbCompanyUrl?: string;
    /** Languages|xs:string|it,en,es,de,fr,cs,pl,hu,sk */
    Language?: string;
    /** xs:boolean */
    LoginRequiredAfterResetPwd?: boolean;
    /** xs:boolean */
    OtpVisibility?: boolean;
    /** xs:string */
    PolicyCookiesURL?: string;
    /** xs:string */
    PrivacyPolicyDisclaimerLabel?: string;
    /** xs:string */
    PrivateCloudCommercialSupportUrl?: string;
    /** SupportSettings */
    SupportSettings?: SupportSettings1;
    /** xs:string */
    TechnicalPanelDomainUrl?: string;
    /** xs:string */
    TechnicalPanelFooterLabel?: string;
    /** xs:int */
    TechnicalPanelHeaderColor?: number;
    /** xs:boolean */
    TechnicalPanelKbEnabled?: boolean;
    /** xs:base64Binary */
    TechnicalPanelLogoGif?: string;
    /** xs:string */
    TechnicalPanelLostPasswordUrl?: string;
    /** xs:boolean */
    TechnicalPanelSupportEnabled?: boolean;
    /** xs:string */
    TechnicalPanelTelerikSkin?: string;
    /** xs:boolean */
    TechnicalPanelVisualCloudEnabled?: boolean;
}
