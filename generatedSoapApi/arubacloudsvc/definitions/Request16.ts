import { Pagination } from "./Pagination";
import { Sorting } from "./Sorting";

/**
 * request
 * @targetNSAlias `q48`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Request16 {
    /** Pagination */
    Pagination?: Pagination;
    /** xs:int */
    PrivateCloudOrganizationID?: number;
    /** Sort */
    Sort?: Sorting;
}
