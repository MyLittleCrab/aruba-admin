import { BoundsConfiguration } from "./BoundsConfiguration";
import { BillingType } from "./BillingType";
import { Hosts } from "./Hosts";
import { TemplateLicenses } from "./TemplateLicenses";

/**
 * HypervisorTemplate
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface HypervisorTemplate {
    /** CpuBound */
    CpuBound?: BoundsConfiguration;
    /** xs:string */
    Description?: string;
    /** xs:dateTime */
    EndDate?: Date;
    /** HardDiskBound */
    HardDiskBound?: BoundsConfiguration;
    /** xs:base64Binary */
    Icon?: string;
    /** xs:string */
    IdentificationCode?: string;
    /** xs:boolean */
    Ipv6Compatible?: boolean;
    /** OSFamily */
    OSFamily?: BillingType;
    /** xs:int */
    ParentTemplateID?: number;
    /** RamBound */
    RamBound?: BoundsConfiguration;
    /** xs:dateTime */
    StartDate?: Date;
    /** Tags */
    Tags?: Hosts;
    /** xs:int */
    TemplateID?: number;
    /** TemplateLicenses */
    TemplateLicenses?: TemplateLicenses;
    /** xs:string */
    TemplateName?: string;
    /** TemplateOwnershipType */
    TemplateOwnershipType?: BillingType;
    /** TemplateType */
    TemplateType?: BillingType;
    /** VMMServerType */
    VMMServerType?: BillingType;
}
