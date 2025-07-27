import { AdditionalServices1 } from "./AdditionalServices1";
import { DedicatedNetworks2 } from "./DedicatedNetworks2";
import { Disks4 } from "./Disks4";
import { SharedNetwork2 } from "./SharedNetwork2";

/**
 * request
 * @targetNSAlias `q285`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface Request46 {
    /** AdditionalServices */
    AdditionalServices?: AdditionalServices1;
    /** xs:int */
    CPU?: number;
    /** DedicatedNetworks */
    DedicatedNetworks?: DedicatedNetworks2;
    /** Disks */
    Disks?: Disks4;
    /** xs:boolean */
    Elastic?: boolean;
    /** xs:int */
    PrivateCloudInstanceID?: number;
    /** xs:int */
    RAM?: number;
    /** xs:int */
    RAM_DR?: number;
    /** SharedNetwork */
    SharedNetwork?: SharedNetwork2;
    /** xs:int */
    UserID?: number;
}
