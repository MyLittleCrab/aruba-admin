import { NewLoadBalancerRule } from "./NewLoadBalancerRule";

/**
 * request
 * @targetNSAlias `q19`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface Request7 {
    /** xs:int */
    LoadBalancerID?: number;
    /** NewLoadBalancerRule */
    NewLoadBalancerRule?: NewLoadBalancerRule;
}
