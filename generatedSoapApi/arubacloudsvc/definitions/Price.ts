import { BillingType } from "./BillingType";
import { Modifiers } from "./Modifiers";

/**
 * Price
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsCommon.Business.Entities`
 */
export interface Price {
    /** BillingTypes|xs:string|TimeBased,OneTime,CalendarMonth,Monthly,TwoMonthly,ThreeMonthly,FourMonthly,HalfYearly,Yearly */
    BillingType?: string;
    /** DelayerModifier|xs:string|False,True */
    DelayerModifier?: string;
    /** HypervisorType */
    HypervisorType?: BillingType;
    /** xs:dateTime */
    InsertDate?: Date;
    /** Modifiers */
    Modifiers?: Modifiers;
    /** PriceListElementStatus|xs:string|Available,NotAvailable */
    PriceListElementStatus?: string;
    /** xs:int */
    ProductID?: number;
    /** ResourceType */
    ResourceType?: BillingType;
    /** xs:int */
    TimeUnitInHours?: number;
    /** xs:decimal */
    Value?: number;
}
