import { LoadBalancerContactsId } from "./LoadBalancerContactsId";
import { InfoTypes } from "./InfoTypes";

/** GetVMPerformances */
export interface GetVmPerformances1 {
    /** VmIDs */
    VmIDs?: LoadBalancerContactsId;
    /** infoTypes */
    infoTypes?: InfoTypes;
}
