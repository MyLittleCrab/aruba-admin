import { ExceptionInfo } from "./ExceptionInfo";
import { Value35 } from "./Value35";

/**
 * GetPagedServersListResult
 * @targetNSAlias `q122`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPagedServersListResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value35;
}
