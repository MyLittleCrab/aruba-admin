import { ExceptionInfo } from "./ExceptionInfo";
import { Value51 } from "./Value51";

/**
 * GetSystemStatusHistoryResult
 * @targetNSAlias `q152`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetSystemStatusHistoryResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value51;
}
