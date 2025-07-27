import { ExceptionInfo } from "./ExceptionInfo";
import { Value59 } from "./Value59";

/**
 * GetVMMetricsResult
 * @targetNSAlias `q171`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetVmMetricsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value59;
}
