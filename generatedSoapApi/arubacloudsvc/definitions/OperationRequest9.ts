import { OperationParameter } from "./OperationParameter";
import { NewSchedulePlan } from "./NewSchedulePlan";

/**
 * operationRequest
 * @targetNSAlias `q227`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface OperationRequest9 {
    /** ScheduledOperationTypes|xs:string|StartVirtualMachine,StopVirtualMachine,ShutdownVirtualMachine,UpdateVirtualMachine,CreateSnapshot,RestoreSnapShot,DeleteSnapshot */
    OperationType?: string;
    /** OperationsParameters */
    OperationsParameters?: OperationParameter;
    /** SchedulePlan */
    SchedulePlan?: NewSchedulePlan;
    /** xs:int */
    ScheduledOperationId?: number;
}
