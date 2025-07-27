import { ExceptionInfo } from "./ExceptionInfo";
import { Value65 } from "./Value65";

/**
 * GetScheduleOccurrencesResult
 * @targetNSAlias `q258`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetScheduleOccurrencesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value65;
}
