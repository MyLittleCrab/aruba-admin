import { IpAddress } from "./IpAddress";

/**
 * IpAddresses
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface IpAddresses {
    /** IPAddress[] */
    IPAddress?: Array<IpAddress>;
}
