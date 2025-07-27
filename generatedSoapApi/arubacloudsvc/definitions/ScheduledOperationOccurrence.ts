
/**
 * ScheduledOperationOccurrence
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface ScheduledOperationOccurrence {
    /** ScheduledOperationTypes|xs:string|StartVirtualMachine,StopVirtualMachine,ShutdownVirtualMachine,UpdateVirtualMachine,CreateSnapshot,RestoreSnapShot,DeleteSnapshot */
    OperationType?: string;
    /** xs:dateTime */
    ScheduleDateTime?: Date;
    /** xs:int */
    ScheduleOperationID?: number;
}
