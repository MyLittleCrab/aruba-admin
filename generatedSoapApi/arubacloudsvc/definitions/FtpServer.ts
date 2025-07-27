
/**
 * FTPServer
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface FtpServer {
    /** xs:string */
    HostName?: string;
    /** xs:int */
    MaxUserSize?: number;
    /** xs:string */
    Name?: string;
    /** xs:int */
    Port?: number;
    /** xs:string */
    PublicIPAddress?: string;
}
