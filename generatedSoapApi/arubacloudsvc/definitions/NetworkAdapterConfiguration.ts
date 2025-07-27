import { PrivateVLan1 } from "./PrivateVLan1";
import { PublicIpAddresses } from "./PublicIpAddresses";

/**
 * NetworkAdapterConfiguration
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface NetworkAdapterConfiguration {
    /** NetworkAdapterTypes|xs:string|Ethernet0,Ethernet1,Ethernet2 */
    NetworkAdapterType?: string;
    /** PrivateVLan */
    PrivateVLan?: PrivateVLan1;
    /** PublicIpAddresses */
    PublicIpAddresses?: PublicIpAddresses;
    /** xs:boolean */
    RandomPublicIP?: boolean;
}
