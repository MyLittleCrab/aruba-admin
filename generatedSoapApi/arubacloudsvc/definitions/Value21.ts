import { PublicVLans } from "./PublicVLans";
import { FeatureTypes } from "./FeatureTypes";

/**
 * Value
 * @targetNSAlias `q23`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Value21 {
    /** PublicVLans */
    PublicVLans?: PublicVLans;
    /** Purchasable */
    Purchasable?: FeatureTypes;
}
