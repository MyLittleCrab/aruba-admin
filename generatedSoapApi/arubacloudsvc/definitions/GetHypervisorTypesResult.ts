import { ExceptionInfo } from "./ExceptionInfo";
import { Value30 } from "./Value30";

/**
 * GetHypervisorTypesResult
 * @targetNSAlias `q109`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetHypervisorTypesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value30;
}
