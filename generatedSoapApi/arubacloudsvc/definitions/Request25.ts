import { Packagesize } from "./Packagesize";
import { Pagination } from "./Pagination";
import { Sorting } from "./Sorting";
import { Hosts } from "./Hosts";

/**
 * request
 * @targetNSAlias `q70`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Request25 {
    /** Packagesize */
    Packagesize?: Packagesize;
    /** Pagination */
    Pagination?: Pagination;
    /** Sorting */
    Sorting?: Sorting;
    /** Tags */
    Tags?: Hosts;
    /** xs:int */
    VMMServerTypeID?: number;
}
