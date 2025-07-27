import { Pagination } from "./Pagination";

/**
 * request
 * @targetNSAlias `q75`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities.PrivateCloud`
 */
export interface Request27 {
    /** Pagination */
    Pagination?: Pagination;
    /** xs:int */
    PrivateCloudInstanceID?: number;
    /** xs:int */
    PrivateCloudOrganizationID?: number;
}
