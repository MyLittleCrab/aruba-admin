import { CustomProductEntities } from "./CustomProductEntities";
import { Ftp } from "./Ftp";
import { IpAddresses } from "./IpAddresses";
import { LoadBalancers } from "./LoadBalancers";
import { PleskLicenses } from "./PleskLicenses";
import { PrivateCloudEntities } from "./PrivateCloudEntities";
import { Value5 } from "./Value5";
import { Servers } from "./Servers";
import { SharedStorages } from "./SharedStorages";
import { VLans } from "./VLans";

/**
 * Value
 * @targetNSAlias `q36`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Value32 {
    /** CustomProductEntities */
    CustomProductEntities?: CustomProductEntities;
    /** xs:int */
    DatacenterId?: number;
    /** FTP */
    FTP?: Ftp;
    /** IpAddresses */
    IpAddresses?: IpAddresses;
    /** LoadBalancers */
    LoadBalancers?: LoadBalancers;
    /** PleskLicenses */
    PleskLicenses?: PleskLicenses;
    /** PrivateCloudEntities */
    PrivateCloudEntities?: PrivateCloudEntities;
    /** xs:int */
    PrivateCloudOrganizations?: number;
    /** PublicIpAddresses */
    PublicIpAddresses?: Value5;
    /** Servers */
    Servers?: Servers;
    /** SharedStorages */
    SharedStorages?: SharedStorages;
    /** VLans */
    VLans?: VLans;
}
