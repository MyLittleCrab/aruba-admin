import { CpuCost } from "./CpuCost";
import { OsTemplateLicensesCost } from "./OsTemplateLicensesCost";
import { VirtualDiskCost } from "./VirtualDiskCost";

/**
 * ServerCost
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface ServerCost1 {
    /** xs:decimal */
    TotalHourlyCost?: number;
    /** CpuCost */
    CpuCost?: CpuCost;
    /** xs:decimal */
    MonthlyCost?: number;
    /** OSTemplateCost */
    OSTemplateCost?: CpuCost;
    /** OSTemplateLicensesCost */
    OSTemplateLicensesCost?: OsTemplateLicensesCost;
    /** RamCost */
    RamCost?: CpuCost;
    /** xs:int */
    ServerId?: number;
    /** VirtualDiskCost */
    VirtualDiskCost?: VirtualDiskCost;
}
