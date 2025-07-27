import { BillingType } from "./BillingType";
import { LoadBalancerContactsId } from "./LoadBalancerContactsId";
import { FeatureTypes } from "./FeatureTypes";
import { ProductInfo } from "./ProductInfo";
import { ResourceBounds } from "./ResourceBounds";
import { Hosts } from "./Hosts";
import { TemplateLicenses1 } from "./TemplateLicenses1";

/**
 * Value
 * @targetNSAlias `q19`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Value17 {
    /** ApplianceType */
    ApplianceType?: BillingType;
    /** ArchitectureType */
    ArchitectureType?: BillingType;
    /** xs:string */
    Category?: string;
    /** xs:int */
    CompanyID?: number;
    /** CompatiblePreConfiguredPackages */
    CompatiblePreConfiguredPackages?: LoadBalancerContactsId;
    /** xs:string */
    Description?: string;
    /** xs:boolean */
    Enabled?: boolean;
    /** xs:dateTime */
    EndDate?: Date;
    /** xs:boolean */
    ExportEnabled?: boolean;
    /** FeatureTypes */
    FeatureTypes?: FeatureTypes;
    /** xs:base64Binary */
    Icon?: string;
    /** xs:string */
    IdentificationCode?: string;
    /** xs:boolean */
    Ipv6Compatible?: boolean;
    /** OSFamily */
    OSFamily?: BillingType;
    /** xs:string */
    OSVersion?: string;
    /** xs:int */
    OwnerUserID?: number;
    /** xs:int */
    ParentTemplateID?: number;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** ResourceBounds */
    ResourceBounds?: ResourceBounds;
    /** xs:string */
    Revision?: string;
    /** xs:boolean */
    SshKeyInitializationSupported?: boolean;
    /** xs:dateTime */
    StartDate?: Date;
    /** Tags */
    Tags?: Hosts;
    /** xs:string */
    TemplateExtendedDescription?: string;
    /** xs:int */
    TemplateID?: number;
    /** TemplateLicenses */
    TemplateLicenses?: TemplateLicenses1;
    /** xs:string */
    TemplateName?: string;
    /** TemplateOwnershipType */
    TemplateOwnershipType?: BillingType;
    /** TemplateSellingStatus */
    TemplateSellingStatus?: BillingType;
    /** TemplateStatus */
    TemplateStatus?: BillingType;
    /** TemplateType */
    TemplateType?: BillingType;
    /** xs:boolean */
    ToolsAvailable?: boolean;
    /** VMMServerType */
    VMMServerType?: BillingType;
}
