import { LoadBalancerIpAddress } from "./LoadBalancerIpAddress";

/**
 * LoadBalancerIPAddresses
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface LoadBalancerIpAddresses {
    /** LoadBalancerIPAddress[] */
    LoadBalancerIPAddress?: Array<LoadBalancerIpAddress>;
}
