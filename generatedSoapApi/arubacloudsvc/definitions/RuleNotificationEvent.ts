import { Communications } from "./Communications";

/**
 * RuleNotificationEvent
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.LoadBalancer`
 */
export interface RuleNotificationEvent {
    /** Communications */
    Communications?: Communications;
    /** xs:dateTime */
    EventDate?: Date;
    /** xs:string */
    HostIP?: string;
    /** xs:int */
    LoadBalancerRuleID?: number;
}
