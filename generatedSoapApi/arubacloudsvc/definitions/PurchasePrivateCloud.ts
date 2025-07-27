import { AdditionalServices } from "./AdditionalServices";
import { DedicatedNetworks1 } from "./DedicatedNetworks1";
import { Disks4 } from "./Disks4";
import { SharedNetwork1 } from "./SharedNetwork1";

/**
 * PurchasePrivateCloud
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface PurchasePrivateCloud {
    /** AdditionalServices */
    AdditionalServices?: AdditionalServices;
    /** xs:int */
    CPU?: number;
    /** DedicatedNetworks */
    DedicatedNetworks?: DedicatedNetworks1;
    /** xs:string */
    Description?: string;
    /** Disks */
    Disks?: Disks4;
    /** xs:boolean */
    Elastic?: boolean;
    /** xs:string */
    Name?: string;
    /** xs:int */
    PrivateCloudPricingTypeID?: number;
    /** xs:int */
    RAM?: number;
    /** xs:int */
    RAM_DR?: number;
    /** SharedNetwork */
    SharedNetwork?: SharedNetwork1;
}
