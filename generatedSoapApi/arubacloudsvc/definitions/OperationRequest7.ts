import { Pagination } from "./Pagination";
import { Sorting } from "./Sorting";

/**
 * operationRequest
 * @targetNSAlias `q174`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface OperationRequest7 {
    /** Pagination */
    Pagination?: Pagination;
    /** Sorting */
    Sorting?: Sorting;
    /** xs:int */
    VMMServerTypeID?: number;
    /** xs:int */
    VirtualMachinePricingTypeID?: number;
}
