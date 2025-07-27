import { Pagination } from "./Pagination";
import { Sorting } from "./Sorting";

/**
 * req
 * @targetNSAlias `q148`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Platform.Entities`
 */
export interface Req {
    /** HypervisorTypes|xs:string|All,HyperV,VMWare,HyperVLowCost,SmartVMWare,OpenStackVPS,OpenStackVPSLowCost,OpenStackPro,OpenStackVPSSpecial */
    HypervisorType?: string;
    /** Pagination */
    Pagination?: Pagination;
    /** Sort */
    Sort?: Sorting;
    /** xs:int */
    TemplateID?: number;
}
