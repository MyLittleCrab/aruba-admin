import { IpAddresses } from "./IpAddresses";
import { VLan } from "./VLan";

/**
 * NetworkAdapter
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface NetworkAdapter {
    /** IPAddresses */
    IPAddresses?: IpAddresses;
    /** xs:int */
    Id?: number;
    /** xs:string */
    MacAddress?: string;
    /** NetworkAdapterTypes|xs:string|Ethernet0,Ethernet1,Ethernet2 */
    NetworkAdapterType?: string;
    /** ReconnectableIPs */
    ReconnectableIPs?: IpAddresses;
    /** xs:int */
    ServerId?: number;
    /** VLan */
    VLan?: VLan;
}
