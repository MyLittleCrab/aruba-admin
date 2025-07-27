import { ProductInfo } from "./ProductInfo";
import { AdditionalService } from "./AdditionalService";

/**
 * SharedNetwork
 * @targetNSAlias `q9`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface SharedNetwork {
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
    /** Firewall */
    Firewall?: AdditionalService;
}
