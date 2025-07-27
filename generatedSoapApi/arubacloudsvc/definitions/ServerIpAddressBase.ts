
/**
 * ServerIpAddressBase
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface ServerIpAddressBase {
    /** xs:dateTime */
    AssociationDate?: Date;
    /** xs:string */
    IP?: string;
    /** xs:string */
    IPType?: string;
    /** xs:int */
    Position?: number;
}
