import { Pagination } from "./Pagination";
import { Sorting } from "./Sorting";

/**
 * request
 * @targetNSAlias `q40`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Request12 {
    /** xs:int */
    HybridLinkID?: number;
    /** xs:string */
    HybridLinkName?: string;
    /** xs:int */
    LinkedResourceID?: number;
    /** Pagination */
    Pagination?: Pagination;
    /** Sorting */
    Sorting?: Sorting;
    /** xs:string */
    TargetCustomResourceIP?: string;
}
