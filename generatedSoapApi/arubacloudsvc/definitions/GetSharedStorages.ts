import { Pagination } from "./Pagination";
import { Sorting } from "./Sorting";

/** GetSharedStorages */
export interface GetSharedStorages {
    /** pagination */
    pagination?: Pagination;
    /** sorting */
    sorting?: Sorting;
}
