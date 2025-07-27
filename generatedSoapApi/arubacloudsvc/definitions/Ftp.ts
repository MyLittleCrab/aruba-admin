import { FtpServer } from "./FtpServer";

/**
 * FTP
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Ftp {
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    DataCenterID?: number;
    /** xs:int */
    FTPAccountID?: number;
    /** FTPAccountStatus|xs:string|Creating,Active,Deleted */
    FTPAccountStatus?: string;
    /** FTPServer */
    FTPServer?: FtpServer;
    /** xs:string */
    Path?: string;
    /** xs:int */
    PersonalTemplateUsedSpace?: number;
    /** xs:int */
    ProductID?: number;
    /** xs:int */
    Quantity?: number;
    /** xs:int */
    ResourceID?: number;
    /** xs:int */
    UsedSpace?: number;
    /** xs:int */
    UserID?: number;
}
