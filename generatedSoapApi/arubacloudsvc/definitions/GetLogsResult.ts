import { ExceptionInfo } from "./ExceptionInfo";
import { Value39 } from "./Value39";

/**
 * GetLogsResult
 * @targetNSAlias `q131`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetLogsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value39;
}
