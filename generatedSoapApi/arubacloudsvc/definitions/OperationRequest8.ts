import { NewSchedulePlan } from "./NewSchedulePlan";
import { OperationParameter } from "./OperationParameter";

/**
 * operationRequest
 * @targetNSAlias `q225`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface OperationRequest8 {
    /** NewSchedulePlan */
    NewSchedulePlan?: NewSchedulePlan;
    /** ScheduledOperationTypes|xs:string|StartVirtualMachine,StopVirtualMachine,ShutdownVirtualMachine,UpdateVirtualMachine,CreateSnapshot,RestoreSnapShot,DeleteSnapshot */
    OperationType?: string;
    /** OperationsParameters */
    OperationsParameters?: OperationParameter;
    /** xs:int */
    ServerID?: number;
}
