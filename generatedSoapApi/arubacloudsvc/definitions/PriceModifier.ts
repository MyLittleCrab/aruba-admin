import { BillingType } from "./BillingType";

/**
 * PriceModifier
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsCommon.Business.Entities`
 */
export interface PriceModifier {
    /** ResourceType */
    ResourceType?: BillingType;
}
