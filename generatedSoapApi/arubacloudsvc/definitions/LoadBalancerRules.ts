import { NewLoadBalancerRule } from "./NewLoadBalancerRule";

/**
 * LoadBalancerRules
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface LoadBalancerRules {
    /** LoadBalancerRule[] */
    LoadBalancerRule?: Array<NewLoadBalancerRule>;
}
