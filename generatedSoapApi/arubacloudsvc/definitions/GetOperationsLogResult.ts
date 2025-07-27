import { ExceptionInfo } from "./ExceptionInfo";
import { Value40 } from "./Value40";

/**
 * GetOperationsLogResult
 * @targetNSAlias `q133`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetOperationsLogResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value40;
}
