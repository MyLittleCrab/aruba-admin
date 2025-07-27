import { OperationParameter } from "./OperationParameter";
import { ScheduledPlan } from "./ScheduledPlan";

/**
 * ScheduledOperation
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface ScheduledOperation {
    /** OperationParameter */
    OperationParameter?: OperationParameter;
    /** ScheduledOperationTypes|xs:string|StartVirtualMachine,StopVirtualMachine,ShutdownVirtualMachine,UpdateVirtualMachine,CreateSnapshot,RestoreSnapShot,DeleteSnapshot */
    OperationType?: string;
    /** xs:int */
    ScheduledOperationID?: number;
    /** ScheduledPlan */
    ScheduledPlan?: ScheduledPlan;
    /** xs:int */
    ServerId?: number;
    /** xs:string */
    ServerName?: string;
}
