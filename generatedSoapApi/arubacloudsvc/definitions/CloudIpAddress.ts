import { DependentByRef } from "./DependentByRef";
import { IpAddress } from "./IpAddress";

/**
 * CloudIpAddress
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface CloudIpAddress {
    /** DependentByRef */
    DependentByRef?: DependentByRef;
    /** IpAddress */
    IpAddress?: IpAddress;
}
