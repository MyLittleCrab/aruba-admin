import { ExceptionInfo } from "./ExceptionInfo";
import { Value67 } from "./Value67";

/**
 * GetAssistanceRequestDetailsResult
 * @targetNSAlias `q266`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetAssistanceRequestDetailsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value67;
}
