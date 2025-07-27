import { ExceptionInfo } from "./ExceptionInfo";
import { Value58 } from "./Value58";

/**
 * GetVMPerformancesResult
 * @targetNSAlias `q169`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetVmPerformancesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value58;
}
