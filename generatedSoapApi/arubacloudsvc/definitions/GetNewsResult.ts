import { ExceptionInfo } from "./ExceptionInfo";
import { Value45 } from "./Value45";

/**
 * GetNewsResult
 * @targetNSAlias `q140`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetNewsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value45;
}
