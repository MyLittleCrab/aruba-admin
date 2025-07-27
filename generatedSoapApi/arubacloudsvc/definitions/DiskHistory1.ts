import { Disks2 } from "./Disks2";

/**
 * DiskHistory
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface DiskHistory1 {
    /** Disks */
    Disks?: Disks2;
    /** xs:dateTime */
    HistoryTime?: Date;
    /** guid|xs:string|pattern */
    RequestID?: string;
}
