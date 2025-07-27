import { AdditionalServices } from "./AdditionalServices";
import { Cpu } from "./Cpu";
import { DedicatedNetworks } from "./DedicatedNetworks";
import { Disks } from "./Disks";
import { SharedNetwork } from "./SharedNetwork";
import { WindowsCore } from "./WindowsCore";

/**
 * PrivateCloudResources
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities.PrivateCloud`
 */
export interface PrivateCloudResources {
    /** AdditionalServices */
    AdditionalServices?: AdditionalServices;
    /** CPU */
    CPU?: Cpu;
    /** DedicatedNetworks */
    DedicatedNetworks?: DedicatedNetworks;
    /** Disks */
    Disks?: Disks;
    /** RAM */
    RAM?: Cpu;
    /** RAM_DR */
    RAM_DR?: Cpu;
    /** SharedNetwork */
    SharedNetwork?: SharedNetwork;
    /** VLan */
    VLan?: Cpu;
    /** xs:int */
    VdcID?: number;
    /** xs:string */
    VdcName?: string;
    /** WindowsCore */
    WindowsCore?: WindowsCore;
}
