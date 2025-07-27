import { TemplateBounds } from "./TemplateBounds";
import { TemplateFeatures } from "./TemplateFeatures";
import { TemplateLicenses2 } from "./TemplateLicenses2";

/**
 * PersonalTemplate
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface PersonalTemplate {
    /** xs:int */
    ApplianceTypeID?: number;
    /** xs:int */
    ArchitectureTypeID?: number;
    /** xs:int */
    CompanyID?: number;
    /** xs:dateTime */
    DateEnd?: Date;
    /** xs:dateTime */
    DateStart?: Date;
    /** xs:boolean */
    Exportable?: boolean;
    /** HypervisorTypes|xs:string|All,HyperV,VMWare,HyperVLowCost,SmartVMWare,OpenStackVPS,OpenStackVPSLowCost,OpenStackPro,OpenStackVPSSpecial */
    HypervisorType?: string;
    /** xs:base64Binary */
    Icon?: string;
    /** xs:string */
    IdentificationCode?: string;
    /** xs:dateTime */
    InsertDate?: Date;
    /** xs:int */
    OSFamilyID?: number;
    /** xs:string */
    OSVersion?: string;
    /** xs:string */
    Revision?: string;
    /** xs:decimal */
    Size?: number;
    /** TemplateBounds */
    TemplateBounds?: TemplateBounds;
    /** xs:string */
    TemplateDescription?: string;
    /** xs:string */
    TemplateExtendedDescription?: string;
    /** TemplateFeatures */
    TemplateFeatures?: TemplateFeatures;
    /** xs:int */
    TemplateID?: number;
    /** TemplateLicenses */
    TemplateLicenses?: TemplateLicenses2;
    /** xs:string */
    TemplateName?: string;
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
    /** xs:int */
    UserID?: number;
}
