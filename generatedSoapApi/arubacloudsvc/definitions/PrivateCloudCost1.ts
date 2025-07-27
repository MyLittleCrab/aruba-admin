import { Cpu1 } from "./Cpu1";
import { Disks1 } from "./Disks1";
import { Ip } from "./Ip";
import { Ram } from "./Ram";
import { VLan1 } from "./VLan1";

/**
 * PrivateCloudCost
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface PrivateCloudCost1 {
    /** xs:decimal */
    TotalHourlyCost?: number;
    /** Cpu */
    Cpu?: Cpu1;
    /** Disks */
    Disks?: Disks1;
    /** Ip */
    Ip?: Ip;
    /** xs:int */
    PrivateCloudCostID?: number;
    /** xs:int */
    ProductID?: number;
    /** Ram */
    Ram?: Ram;
    /** RamDr */
    RamDr?: Ram;
    /** VLan */
    VLan?: VLan1;
}
