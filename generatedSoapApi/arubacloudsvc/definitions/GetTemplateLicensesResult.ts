import { ExceptionInfo } from "./ExceptionInfo";
import { Value49 } from "./Value49";

/**
 * GetTemplateLicensesResult
 * @targetNSAlias `q149`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetTemplateLicensesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value49;
}
