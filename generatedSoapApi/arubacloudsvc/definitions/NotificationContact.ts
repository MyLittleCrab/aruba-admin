
/**
 * NotificationContact
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface NotificationContact {
    /** xs:string */
    ContactValue?: string;
    /** xs:int */
    LoadBalancerContactID?: number;
    /** NotificationType|xs:string|Email,Sms */
    Type?: string;
}
