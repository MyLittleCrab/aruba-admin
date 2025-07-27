import { TemplateBounds } from "./TemplateBounds";
import { TemplateLicenses2 } from "./TemplateLicenses2";

/**
 * template
 * @targetNSAlias `q205`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Template {
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
    /** TemplateBound */
    TemplateBound?: TemplateBounds;
    /** xs:string */
    TemplateDescription?: string;
    /** xs:string */
    TemplateExternalDescription?: string;
    /** TemplateLicenses */
    TemplateLicenses?: TemplateLicenses2;
    /** xs:string */
    TemplatePassword?: string;
    /** xs:string */
    TemplateUsername?: string;
    /** xs:int */
    VirtualMachineID?: number;
}
