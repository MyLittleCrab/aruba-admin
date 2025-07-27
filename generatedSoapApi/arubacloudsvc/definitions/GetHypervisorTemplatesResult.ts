import { ExceptionInfo } from "./ExceptionInfo";
import { Value16 } from "./Value16";

/**
 * GetHypervisorTemplatesResult
 * @targetNSAlias `q71`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetHypervisorTemplatesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value16;
}
