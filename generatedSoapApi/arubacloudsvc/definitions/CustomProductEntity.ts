import { History } from "./History";
import { ProductCategory } from "./ProductCategory";
import { ReferencedResource } from "./ReferencedResource";

/**
 * CustomProductEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.CustomProduct`
 */
export interface CustomProductEntity {
    /** BillingTypes|xs:string|TimeBased,OneTime,CalendarMonth,Monthly,TwoMonthly,ThreeMonthly,FourMonthly,HalfYearly,Yearly */
    BillingType?: string;
    /** xs:int */
    CompanyID?: number;
    /** CustomPriceListElementStatus|xs:string|Creating,Active,Deleted */
    CustomPriceListElementStatus?: string;
    /** xs:int */
    CustomProductID?: number;
    /** xs:int */
    DataCenterID?: number;
    /** xs:dateTime */
    DeletionDate?: Date;
    /** xs:dateTime */
    ExpiryDate?: Date;
    /** History */
    History?: History;
    /** xs:dateTime */
    InsertDate?: Date;
    /** xs:dateTime */
    ModifiedDate?: Date;
    /** xs:decimal */
    Price?: number;
    /** ProductCategory */
    ProductCategory?: ProductCategory;
    /** xs:string */
    ProductDescription?: string;
    /** xs:int */
    ProductID?: number;
    /** xs:string */
    ProductName?: string;
    /** xs:int */
    Quantity?: number;
    /** ReferencedResource */
    ReferencedResource?: ReferencedResource;
    /** xs:int */
    ResourceID?: number;
    /** xs:int */
    UserID?: number;
}
