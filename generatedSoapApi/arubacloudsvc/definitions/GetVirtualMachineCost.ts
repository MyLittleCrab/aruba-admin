import { Server1 } from "./Server1";

/** GetVirtualMachineCost */
export interface GetVirtualMachineCost {
    /** server */
    server?: Server1;
    /** xs:int */
    virtualMachineID?: number;
}
