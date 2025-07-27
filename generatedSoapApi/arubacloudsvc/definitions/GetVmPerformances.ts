import { LoadBalancerContactsId } from "./LoadBalancerContactsId";
import { InfoTypes } from "./InfoTypes";

/** GetVMPerformances */
export interface GetVmPerformances {
    /** VmIDs */
    VmIDs?: LoadBalancerContactsId;
    /** infoTypes */
    infoTypes?: InfoTypes;
}
