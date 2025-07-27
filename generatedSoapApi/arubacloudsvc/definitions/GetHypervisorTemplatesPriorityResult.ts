import { ExceptionInfo } from "./ExceptionInfo";
import { Value15 } from "./Value15";

/**
 * GetHypervisorTemplatesPriorityResult
 * @targetNSAlias `q69`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetHypervisorTemplatesPriorityResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value15;
}
