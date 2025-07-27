import { Cores } from "./Cores";

/**
 * CpuHistory
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface CpuHistory1 {
    /** Cores */
    Cores?: Cores;
    /** xs:dateTime */
    HistoryTime?: Date;
    /** guid|xs:string|pattern */
    RequestID?: string;
}
