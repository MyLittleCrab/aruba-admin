import { BillingType } from "./BillingType";

/**
 * WindowsCore
 * @targetNSAlias `q11`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface WindowsCore {
    /** xs:int */
    RunningCoreQuantity?: number;
    /** Status */
    Status?: BillingType;
}
