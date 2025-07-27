import { NotificationContacts } from "./NotificationContacts";

/**
 * request
 * @targetNSAlias `q9`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface Request3 {
    /** xs:int */
    LoadBalancerID?: number;
    /** NotificationContacts */
    NotificationContacts?: NotificationContacts;
}
