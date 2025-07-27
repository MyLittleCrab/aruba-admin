import { LoadBalancerContactsId } from "./LoadBalancerContactsId";
import { ScheduleWeekDays } from "./ScheduleWeekDays";

/**
 * NewSchedulePlan
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface NewSchedulePlan {
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
    /** ScheduledPlanStatus|xs:string|Enabled,Disabled,Deleted */
    ScheduledPlanStatus?: string;
}
