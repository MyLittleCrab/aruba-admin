
/**
 * PrivateCloudOrganizationBaseInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface PrivateCloudOrganizationBaseInfo {
    /** xs:string */
    CellDescription?: string;
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    DataCenterID?: number;
    /** xs:string */
    Org?: string;
    /** xs:int */
    PrivateCloudCell?: number;
    /** xs:int */
    PrivateCloudOrganizationID?: number;
    /** xs:int */
    TotalCPU?: number;
    /** xs:int */
    TotalRAM?: number;
    /** xs:int */
    TotalStorage?: number;
    /** xs:int */
    TotalVDC?: number;
    /** xs:string */
    vDirectorUrl?: string;
}
