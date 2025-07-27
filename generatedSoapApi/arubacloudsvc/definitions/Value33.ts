import { CustomProductsCost } from "./CustomProductsCost";
import { FtpCost } from "./FtpCost";
import { IpAddressCost } from "./IpAddressCost";
import { LoadBalancersCost } from "./LoadBalancersCost";
import { PleskLicensesCost } from "./PleskLicensesCost";
import { PrivateCloudCost } from "./PrivateCloudCost";
import { ServerCost } from "./ServerCost";
import { SharedStorageCost } from "./SharedStorageCost";
import { CpuCost } from "./CpuCost";

/**
 * Value
 * @targetNSAlias `q37`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Value33 {
    /** xs:decimal */
    TotalHourlyCost?: number;
    /** xs:string */
    CurrencyCode?: string;
    /** CustomProductsCost */
    CustomProductsCost?: CustomProductsCost;
    /** xs:int */
    DatacenterId?: number;
    /** FTPCost */
    FTPCost?: FtpCost;
    /** IpAddressCost */
    IpAddressCost?: IpAddressCost;
    /** LoadBalancersCost */
    LoadBalancersCost?: LoadBalancersCost;
    /** PleskLicensesCost */
    PleskLicensesCost?: PleskLicensesCost;
    /** PrivateCloudCost */
    PrivateCloudCost?: PrivateCloudCost;
    /** ServerCost */
    ServerCost?: ServerCost;
    /** SharedStorageCost */
    SharedStorageCost?: SharedStorageCost;
    /** VLanCost */
    VLanCost?: CpuCost;
}
