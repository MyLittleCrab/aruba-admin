import { Hosts } from "./Hosts";
import { Pagination } from "./Pagination";
import { Sorting } from "./Sorting";

/**
 * operationRequest
 * @targetNSAlias `q121`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface OperationRequest1 {
    /** xs:boolean */
    CanBeMigrated?: boolean;
    /** xs:boolean */
    GroupMigrated?: boolean;
    /** HypervisorTypes */
    HypervisorTypes?: Hosts;
    /** xs:string */
    Os?: string;
    /** Pagination */
    Pagination?: Pagination;
    /** xs:string */
    ServerName?: string;
    /** ServerStatuses */
    ServerStatuses?: Hosts;
    /** Sorting */
    Sorting?: Sorting;
}
