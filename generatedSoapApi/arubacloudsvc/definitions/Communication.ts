import { Recipients } from "./Recipients";

/**
 * Communication
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface Communication {
    /** NotificationType|xs:string|Email,Sms */
    NotificationType?: string;
    /** xs:int */
    ProductID?: number;
    /** Recipients */
    Recipients?: Recipients;
    /** xs:int */
    ResourceID?: number;
    /** xs:dateTime */
    SendDate?: Date;
    /** xs:string */
    Text?: string;
}
