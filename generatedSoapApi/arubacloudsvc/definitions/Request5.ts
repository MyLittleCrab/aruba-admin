import { Instances } from "./Instances";

/**
 * request
 * @targetNSAlias `q13`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface Request5 {
    /** Instances */
    Instances?: Instances;
    /** xs:int */
    LoadBalancerID?: number;
}
