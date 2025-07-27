import { BillingType } from "./BillingType";

/**
 * PurchasedPrivateCloudsBaseResponse
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities.PrivateCloud`
 */
export interface PurchasedPrivateCloudsBaseResponse {
    /** xs:boolean */
    Autorenewal?: boolean;
    /** xs:int */
    CPUQuantity?: number;
    /** xs:int */
    CompanyID?: number;
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:dateTime */
    DeletionDate?: Date;
    /** xs:int */
    DisksQuantity?: number;
    /** xs:boolean */
    Elastic?: boolean;
    /** xs:string */
    Name?: string;
    /** xs:string */
    PricingTypeCode?: string;
    /** xs:int */
    PricingTypeID?: number;
    /** xs:int */
    PrivateCloudInstanceID?: number;
    /** xs:int */
    RAMQuantity?: number;
    /** xs:int */
    ResourceID?: number;
    /** Status */
    Status?: BillingType;
    /** xs:int */
    UserID?: number;
    /** xs:boolean */
    CanActivate?: boolean;
    /** xs:int */
    PrivateCloudOrganizationID?: number;
    /** xs:string */
    PrivateCloudOrganizationName?: string;
}
