import { LoadBalancerContactsId } from "./LoadBalancerContactsId";
import { FeatureTypes1 } from "./FeatureTypes1";
import { ResourceBounds2 } from "./ResourceBounds2";
import { Tags } from "./Tags";
import { TemplateLicenses2 } from "./TemplateLicenses2";

/**
 * TemplateDetails
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface TemplateDetails {
    /** ApplianceTypes|xs:string|WebServer,Database,VirtualDesktop,MailServer,Firewall,Nas,LoadBalancer */
    ApplianceType?: string;
    /** ArchitectureTypes|xs:string|Bit32,Bit64,Other */
    ArchitectureType?: string;
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
    /** xs:boolean */
    ExportEnabled?: boolean;
    /** FeatureTypes */
    FeatureTypes?: FeatureTypes1;
    /** xs:base64Binary */
    Icon?: string;
    /** xs:int */
    Id?: number;
    /** xs:string */
    IdentificationCode?: string;
    /** xs:boolean */
    Ipv6Compatible?: boolean;
    /** xs:string */
    Name?: string;
    /** OSFamilyTypes|xs:string|WindowsServer2003,WindowsServer2008,Debian,Ubuntu,CentOS,BSD,Custom,openSuse,Other,WindowsServer2012,WindowsServer2016,WindowsServer2019,AlmaLinux,WindowsServer2022 */
    OSFamily?: string;
    /** xs:string */
    OSVersion?: string;
    /** xs:int */
    OwnerUserId?: number;
    /** xs:int */
    ParentTemplateID?: number;
    /** xs:int */
    ProductId?: number;
    /** ResourceBounds */
    ResourceBounds?: ResourceBounds2;
    /** xs:string */
    Revision?: string;
    /** xs:boolean */
    SshKeyInitializationSupported?: boolean;
    /** Tags */
    Tags?: Tags;
    /** xs:string */
    TemplateExtendedDescription?: string;
    /** TemplateLicenses */
    TemplateLicenses?: TemplateLicenses2;
    /** TemplateOwnershipTypes|xs:string|Public,Custom,Personal,Premium */
    TemplateOwnershipType?: string;
    /** xs:string */
    TemplatePassword?: string;
    /** TemplateSellingStatus|xs:string|OnSale,NotOnSale */
    TemplateSellingStatus?: string;
    /** TemplateStatus|xs:string|Creating,Active,Removed,Deleted */
    TemplateStatus?: string;
    /** TemplateTypes|xs:string|Windows,Linux,Custom */
    TemplateType?: string;
    /** xs:string */
    TemplateUsername?: string;
    /** xs:boolean */
    ToolsAvailable?: boolean;
}
