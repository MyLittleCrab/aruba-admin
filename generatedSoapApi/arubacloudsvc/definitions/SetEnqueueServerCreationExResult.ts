import { ExceptionInfo } from "./ExceptionInfo";
import { Value62 } from "./Value62";

/**
 * SetEnqueueServerCreationExResult
 * @targetNSAlias `q182`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface SetEnqueueServerCreationExResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value62;
}
