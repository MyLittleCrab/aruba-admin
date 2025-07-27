import { HybridLinkPricingTypeDescriptions } from "./HybridLinkPricingTypeDescriptions";
import { BillingType } from "./BillingType";
import { SourceResource } from "./SourceResource";
import { TargetCustomResource } from "./TargetCustomResource";

/**
 * HybridLink
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface HybridLink {
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    DataCenterID?: number;
    /** xs:dateTime */
    DeletionDate?: Date;
    /** xs:int */
    HybridLinkID?: number;
    /** xs:string */
    HybridLinkName?: string;
    /** HybridLinkPricingTypeDescriptions */
    HybridLinkPricingTypeDescriptions?: HybridLinkPricingTypeDescriptions;
    /** xs:int */
    HybridLinkPricingTypeID?: number;
    /** HybridLinkStatus */
    HybridLinkStatus?: BillingType;
    /** xs:decimal */
    MonthlyCost?: number;
    /** xs:dateTime */
    RenewalDate?: Date;
    /** xs:int */
    ResourceID?: number;
    /** SourceResource */
    SourceResource?: SourceResource;
    /** TargetCustomResource */
    TargetCustomResource?: TargetCustomResource;
    /** TargetResource */
    TargetResource?: SourceResource;
}
