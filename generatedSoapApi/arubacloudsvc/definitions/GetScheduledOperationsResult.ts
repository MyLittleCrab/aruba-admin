import { ExceptionInfo } from "./ExceptionInfo";
import { ScheduledOperations } from "./ScheduledOperations";

/**
 * GetScheduledOperationsResult
 * @targetNSAlias `q142`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetScheduledOperationsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: ScheduledOperations;
}
