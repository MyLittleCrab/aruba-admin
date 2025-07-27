import { ExceptionInfo } from "./ExceptionInfo";
import { Value57 } from "./Value57";

/**
 * GetVMPerformanceResult
 * @targetNSAlias `q166`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetVmPerformanceResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value57;
}
