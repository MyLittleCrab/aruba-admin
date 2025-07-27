import { Descriptions1 } from "./Descriptions1";
import { ResourceProducts } from "./ResourceProducts";

/**
 * OpenStackFlavor
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface OpenStackFlavor {
    /** xs:int */
    BandWidthQuantity?: number;
    /** xs:int */
    CpuQuantity?: number;
    /** Descriptions */
    Descriptions?: Descriptions1;
    /** OpenStackFlavorType|xs:string|GeneralPurpose,RamOriented */
    FlavorType?: string;
    /** xs:int */
    Hdd0Quantity?: number;
    /** xs:int */
    ID?: number;
    /** xs:string */
    IdentificationCode?: string;
    /** xs:boolean */
    IsAvailable?: boolean;
    /** xs:int */
    MemoryQuantity?: number;
    /** ResourceProducts */
    ResourceProducts?: ResourceProducts;
}
