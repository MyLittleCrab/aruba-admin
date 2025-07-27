import { CpuHistory } from "./CpuHistory";
import { DiskHistory } from "./DiskHistory";
import { RamHistory } from "./RamHistory";

/**
 * Value
 * @targetNSAlias `q63`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Value51 {
    /** CpuHistory */
    CpuHistory?: CpuHistory;
    /** DiskHistory */
    DiskHistory?: DiskHistory;
    /** RamHistory */
    RamHistory?: RamHistory;
    /** xs:int */
    ServerID?: number;
}
