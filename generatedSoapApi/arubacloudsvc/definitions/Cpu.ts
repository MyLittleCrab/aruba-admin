import { ProductInfo } from "./ProductInfo";

/**
 * CPU
 * @targetNSAlias `q4`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Cpu {
    /** xs:int */
    FreeQuantity?: number;
    /** xs:boolean */
    IsEncrypted?: boolean;
    /** xs:int */
    NewQuantity?: number;
    /** xs:int */
    ProductID?: number;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** xs:int */
    Quantity?: number;
    /** xs:int */
    ResourceID?: number;
    /** xs:int */
    ResourceProductId?: number;
    /** xs:string */
    ResourceProductType?: string;
}
