import { CpuMetrics } from "./CpuMetrics";
import { DisksMetrics } from "./DisksMetrics";
import { NetMetrics } from "./NetMetrics";
import { RamMetrics } from "./RamMetrics";

/**
 * VMMetricsResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/WcfPerformance.Entities`
 */
export interface VmMetricsResult {
    /** CpuMetrics */
    CpuMetrics?: CpuMetrics;
    /** DisksMetrics */
    DisksMetrics?: DisksMetrics;
    /** NetMetrics */
    NetMetrics?: NetMetrics;
    /** RamMetrics */
    RamMetrics?: RamMetrics;
    /** xs:string */
    VMUniqueName?: string;
}
