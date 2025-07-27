import { ProductInfo } from "./ProductInfo";

/**
 * NetworkResourceProducts
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SmartVMWare`
 */
export interface NetworkResourceProducts {
    /** xs:string */
    PublicIPType?: string;
    /** xs:int */
    ResourceTypeId?: number;
    /** xs:int */
    VMMServerTypeId?: number;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
}
