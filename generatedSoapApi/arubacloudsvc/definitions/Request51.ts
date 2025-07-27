import { Instances } from "./Instances";
import { LoadBalancerContactsId } from "./LoadBalancerContactsId";
import { NotificationContacts } from "./NotificationContacts";
import { LoadBalancerRules } from "./LoadBalancerRules";

/**
 * request
 * @targetNSAlias `q299`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface Request51 {
    /** xs:boolean */
    HealthCheckNotification?: boolean;
    /** Instance */
    Instance?: Instances;
    /** IpAddressResourceId */
    IpAddressResourceId?: LoadBalancerContactsId;
    /** xs:int */
    LoadBalancerClassOfServiceID?: number;
    /** xs:string */
    Name?: string;
    /** NotificationContacts */
    NotificationContacts?: NotificationContacts;
    /** Rules */
    Rules?: LoadBalancerRules;
}
