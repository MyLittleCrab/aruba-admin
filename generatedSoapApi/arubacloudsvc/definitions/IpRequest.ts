import { LoadBalancerContactsId } from "./LoadBalancerContactsId";

/**
 * ipRequest
 * @targetNSAlias `q210`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface IpRequest {
    /** IpAddressResourceIds */
    IpAddressResourceIds?: LoadBalancerContactsId;
    /** xs:int */
    NetworkAdapterId?: number;
    /** xs:boolean */
    SetOnVirtualMachine?: boolean;
}
