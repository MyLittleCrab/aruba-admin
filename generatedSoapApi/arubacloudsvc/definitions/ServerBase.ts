import { ActiveJobs1 } from "./ActiveJobs1";
import { BillingType } from "./BillingType";
import { IpAddresses1 } from "./IpAddresses1";
import { MigratedFrom1 } from "./MigratedFrom1";

/**
 * ServerBase
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface ServerBase {
    /** ActiveJobs */
    ActiveJobs?: ActiveJobs1;
    /** xs:int */
    CPUQuantity?: number;
    /** xs:boolean */
    CanBeMigrated?: boolean;
    /** xs:int */
    DataCenterID?: number;
    /** xs:int */
    HDQuantity?: number;
    /** xs:boolean */
    HasActiveSnapshots?: boolean;
    /** HypervisorType */
    HypervisorType?: BillingType;
    /** IPAddresses */
    IPAddresses?: IpAddresses1;
    /** MigratedFrom */
    MigratedFrom?: MigratedFrom1;
    /** MigratedTo */
    MigratedTo?: MigratedFrom1;
    /** xs:string */
    Name?: string;
    /** xs:int */
    RAMQuantity?: number;
    /** xs:dateTime */
    SavingIPForcedDeassociationDate?: Date;
    /** xs:int */
    ServerID?: number;
    /** ServerStatus */
    ServerStatus?: BillingType;
    /** xs:string */
    TemplateDescription?: string;
    /** xs:boolean */
    ToolsAvailable?: boolean;
    /** xs:int */
    UserID?: number;
}
