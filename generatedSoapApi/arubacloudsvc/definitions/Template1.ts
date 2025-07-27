import { TemplateBounds } from "./TemplateBounds";

/**
 * template
 * @targetNSAlias `q243`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Template1 {
    /** xs:int */
    ApplianceTypeID?: number;
    /** xs:int */
    ArchitectureTypeID?: number;
    /** xs:base64Binary */
    Icon?: string;
    /** xs:int */
    OSFamilyID?: number;
    /** xs:string */
    OSVersion?: string;
    /** xs:string */
    Revision?: string;
    /** TemplateBounds */
    TemplateBounds?: TemplateBounds;
    /** xs:string */
    TemplateDescription?: string;
    /** xs:string */
    TemplateExtendedDescription?: string;
    /** xs:int */
    TemplateID?: number;
    /** xs:string */
    TemplatePassword?: string;
    /** xs:string */
    TemplateUsername?: string;
}
