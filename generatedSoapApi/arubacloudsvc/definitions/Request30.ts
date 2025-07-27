import { Pagination } from "./Pagination";

/**
 * request
 * @targetNSAlias `q86`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Request30 {
    /** Pagination */
    Pagination?: Pagination;
    /** xs:int */
    PrivateCloudOrganizationID?: number;
}
