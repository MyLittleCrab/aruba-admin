import { CpuCost } from "./CpuCost";

/**
 * OSTemplateLicensesCost
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface OsTemplateLicensesCost {
    /** ResourceCost[] */
    ResourceCost?: Array<CpuCost>;
}
