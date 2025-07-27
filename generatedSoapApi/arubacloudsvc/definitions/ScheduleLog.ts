
/**
 * ScheduleLog
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface ScheduleLog {
    /** xs:dateTime */
    LastExecutionDate?: Date;
    /** xs:int */
    LogCodeID?: number;
    /** xs:dateTime */
    LogDate?: Date;
    /** xs:string */
    LogMessage?: string;
    /** ScheduledOperationTypes|xs:string|StartVirtualMachine,StopVirtualMachine,ShutdownVirtualMachine,UpdateVirtualMachine,CreateSnapshot,RestoreSnapShot,DeleteSnapshot */
    Operation?: string;
    /** xs:string */
    Parameters?: string;
    /** xs:int */
    ScheduleID?: number;
    /** xs:string */
    ScheduleLabel?: string;
    /** xs:int */
    ScheduleLogId?: number;
    /** xs:int */
    ServerID?: number;
    /** xs:string */
    ServerName?: string;
    /** xs:dateTime */
    StartDate?: Date;
}
