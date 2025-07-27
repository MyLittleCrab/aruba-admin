import { Disks3 } from "./Disks3";

/**
 * DisksMetric
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/WcfPerformance.Entities`
 */
export interface DisksMetric {
    /** Disks */
    Disks?: Disks3;
    /** xs:dateTime */
    Time?: Date;
}
