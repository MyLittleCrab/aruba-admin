import { ProductCategory } from "./ProductCategory";
import { ReferencedResource } from "./ReferencedResource";

/**
 * CustomProductHistory
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.CustomProduct`
 */
export interface CustomProductHistory {
    /** BillingTypes|xs:string|TimeBased,OneTime,CalendarMonth,Monthly,TwoMonthly,ThreeMonthly,FourMonthly,HalfYearly,Yearly */
    BillingType?: string;
    /** CustomPriceListElementStatus|xs:string|Creating,Active,Deleted */
    CustomPriceListElementStatus?: string;
    /** xs:dateTime */
    DeletionDate?: Date;
    /** xs:dateTime */
    ExpiryDate?: Date;
    /** xs:dateTime */
    HistoryDate?: Date;
    /** xs:string */
    Note?: string;
    /** xs:string */
    OperatorName?: string;
    /** xs:decimal */
    Price?: number;
    /** ProductCategory */
    ProductCategory?: ProductCategory;
    /** xs:string */
    ProductDescription?: string;
    /** xs:string */
    ProductName?: string;
    /** xs:int */
    Quantity?: number;
    /** ReferencedResource */
    ReferencedResource?: ReferencedResource;
    /** xs:int */
    ResourceID?: number;
}
