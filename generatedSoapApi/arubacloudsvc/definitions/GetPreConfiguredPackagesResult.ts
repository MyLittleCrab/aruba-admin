import { ExceptionInfo } from "./ExceptionInfo";
import { Value3 } from "./Value3";

/**
 * GetPreConfiguredPackagesResult
 * @targetNSAlias `q26`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPreConfiguredPackagesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value3;
}
