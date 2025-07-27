import { Values } from "./Values";

/**
 * PriceList
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsCommon.Business.Entities`
 */
export interface PriceList {
    /** xs:string */
    CurrencyCode?: string;
    /** Values */
    Values?: Values;
}
