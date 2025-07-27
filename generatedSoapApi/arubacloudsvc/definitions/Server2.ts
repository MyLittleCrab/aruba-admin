import { VirtualDisks2 } from "./VirtualDisks2";

/**
 * server
 * @targetNSAlias `q183`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Server2 {
    /** xs:int */
    CPUQuantity?: number;
    /** xs:int */
    OpenStackFlavorID?: number;
    /** xs:int */
    RAMQuantity?: number;
    /** xs:boolean */
    RestartAfterExecuted?: boolean;
    /** xs:int */
    ServerId?: number;
    /** xs:int */
    SmartVMWarePackageID?: number;
    /** VirtualDisks */
    VirtualDisks?: VirtualDisks2;
}
