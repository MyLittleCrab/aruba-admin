import { LoadBalancerContactsId } from "./LoadBalancerContactsId";
import { ScheduleWeekDays } from "./ScheduleWeekDays";

/**
 * ScheduledPlan
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface ScheduledPlan {
    /** xs:dateTime */
    FirstExecutionTime?: Date;
    /** xs:dateTime */
    LastExecutionTime?: Date;
    /** ScheduleDaysOfMonth */
    ScheduleDaysOfMonth?: LoadBalancerContactsId;
    /** xs:dateTime */
    ScheduleEndDateTime?: Date;
    /** xs:int */
    ScheduleFrequency?: number;
    /** ScheduleFrequencyType|xs:string|RunOnce,Hourly,Daily,Weekly,Monthly,MonthlyRelative */
    ScheduleFrequencyType?: string;
    /** xs:string */
    ScheduleOperationLabel?: string;
    /** xs:dateTime */
    ScheduleStartDateTime?: Date;
    /** ScheduleWeekDays */
    ScheduleWeekDays?: ScheduleWeekDays;
    /** ScheduledMontlyRecurrence|xs:string|FirstDay,LastDay */
    ScheduledMontlyRecurrence?: string;
    /** ScheduleOwnerType|xs:string|CloudUser,CloudSystem */
    ScheduledOwnerType?: string;
    /** xs:int */
    ScheduledPlanId?: number;
    /** ScheduledPlanStatus|xs:string|Enabled,Disabled,Deleted */
    ScheduledPlanStatus?: string;
}
