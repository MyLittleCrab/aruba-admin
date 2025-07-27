import { CpuMetric } from "./CpuMetric";

/**
 * CpuMetrics
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/WcfPerformance.Entities`
 */
export interface CpuMetrics {
    /** CpuMetric[] */
    CpuMetric?: Array<CpuMetric>;
}
