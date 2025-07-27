
/**
 * NewLoadBalancerRule
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface NewLoadBalancerRule {
    /** LoadBalancerAlgorithmType|xs:string|Source,Leastconn */
    BalanceType?: string;
    /** xs:string */
    Certificate?: string;
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    ID?: number;
    /** xs:int */
    InstancePort?: number;
    /** xs:int */
    LoadBalancerPort?: number;
    /** LoadBalancerProtocol|xs:string|Http,Https,Tcp,Ssl */
    Protocol?: string;
}
