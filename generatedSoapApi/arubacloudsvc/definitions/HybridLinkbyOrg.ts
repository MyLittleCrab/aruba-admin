import { BillingType } from "./BillingType";

/**
 * HybridLinkbyOrg
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface HybridLinkbyOrg {
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    HybridLinkID?: number;
    /** xs:string */
    HybridLinkName?: string;
    /** HybridLinkStatus */
    HybridLinkStatus?: BillingType;
    /** xs:string */
    VDCName?: string;
}
