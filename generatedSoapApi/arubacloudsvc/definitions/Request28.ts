import { LoadBalancerContactsId } from "./LoadBalancerContactsId";

/**
 * request
 * @targetNSAlias `q80`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Request28 {
    /** IpToAdd */
    IpToAdd?: LoadBalancerContactsId;
    /** IpToRemove */
    IpToRemove?: LoadBalancerContactsId;
    /** xs:int */
    NetworkAdapterID?: number;
    /** xs:int */
    VirtualMachineID?: number;
}
