
/**
 * OperatingSystemFamily
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface OperatingSystemFamily1 {
    /** xs:string */
    OperatingSystemFamilyDescription?: string;
    /** xs:int */
    OperatingSystemFamilyID?: number;
    /** TemplateTypes|xs:string|Windows,Linux,Custom */
    TemplateTypes?: string;
}
