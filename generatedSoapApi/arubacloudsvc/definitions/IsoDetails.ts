
/**
 * IsoDetails
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface IsoDetails {
    /** xs:string */
    Description?: string;
    /** xs:int */
    InvalidityCode?: number;
    /** xs:string */
    InvalidityReason?: string;
    /** IsoTypes|xs:string|Custom */
    IsoType?: string;
    /** xs:string */
    Name?: string;
    /** xs:string */
    Path?: string;
    /** xs:int */
    Size?: number;
    /** xs:long */
    SizeByte?: number;
}
