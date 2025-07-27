import { ScheduleParameterTypeDescription } from "./ScheduleParameterTypeDescription";

/**
 * ScheduleParametersType
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface ScheduleParametersType {
    /** xs:string */
    ScheduleOperationDescription?: string;
    /** xs:int */
    ScheduleOperationTypeId?: number;
    /** ScheduleParameterTypeDescription */
    ScheduleParameterTypeDescription?: ScheduleParameterTypeDescription;
    /** xs:int */
    ScheduledParameterTypeId?: number;
    /** xs:int */
    ValidationExpression?: number;
}
