import { DataCenterSettings } from "./DataCenterSettings";
import { SupportSettings } from "./SupportSettings";

/**
 * Value
 * @targetNSAlias `q31`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Value29 {
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
    /** xs:int */
    CreditDisplayMode?: number;
    /** xs:boolean */
    CustomerAreaSsoEnabled?: boolean;
    /** xs:string */
    CustomerCareEmailAddress?: string;
    /** DataCenterSettings */
    DataCenterSettings?: DataCenterSettings;
    /** xs:string */
    KbCompanyUrl?: string;
    /** xs:int */
    LanguageID?: number;
    /** xs:boolean */
    LoginRequiredAfterResetPwd?: boolean;
    /** xs:string */
    PolicyCookiesURL?: string;
    /** xs:string */
    PrivateCloudCommercialSupportUrl?: string;
    /** SupportSettings */
    SupportSettings?: SupportSettings;
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
