import { ExceptionInfo } from "./ExceptionInfo";
import { Value6 } from "./Value6";

/**
 * GetReverseDnsResult
 * @targetNSAlias `q37`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetReverseDnsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value6;
}
