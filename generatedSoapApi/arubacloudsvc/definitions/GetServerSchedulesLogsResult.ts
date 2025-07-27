import { ExceptionInfo } from "./ExceptionInfo";
import { Value46 } from "./Value46";

/**
 * GetServerSchedulesLogsResult
 * @targetNSAlias `q144`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetServerSchedulesLogsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value46;
}
