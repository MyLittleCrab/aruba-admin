import { BillingType } from "./BillingType";

/**
 * JobBase
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface JobBase {
    /** xs:int */
    JobID?: number;
    /** Operation */
    Operation?: BillingType;
    /** Status */
    Status?: BillingType;
}
