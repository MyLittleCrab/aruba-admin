import { Cpu3 } from "./Cpu3";

/**
 * GetVMMetricsRequest
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Operations`
 */
export interface GetVmMetricsRequest {
    /** CPU */
    CPU?: Cpu3;
    /** Disks */
    Disks?: Cpu3;
    /** Net */
    Net?: Cpu3;
    /** RAM */
    RAM?: Cpu3;
    /** xs:int */
    VmID?: number;
}
