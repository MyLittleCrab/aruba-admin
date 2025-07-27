import { LoadBalancerContactsId } from "./LoadBalancerContactsId";

/**
 * request
 * @targetNSAlias `q11`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface Request4 {
    /** LoadBalancerContactsID */
    LoadBalancerContactsID?: LoadBalancerContactsId;
    /** xs:int */
    LoadBalancerID?: number;
}
