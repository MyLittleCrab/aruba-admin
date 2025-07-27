import { SourceResourceType } from "./SourceResourceType";

/**
 * HybridLinkResourcesCompatibility
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface HybridLinkResourcesCompatibility1 {
    /** xs:int */
    HyperLinkPricingTypeID?: number;
    /** SourceResourceType */
    SourceResourceType?: SourceResourceType;
    /** TargetResourceType */
    TargetResourceType?: SourceResourceType;
}
