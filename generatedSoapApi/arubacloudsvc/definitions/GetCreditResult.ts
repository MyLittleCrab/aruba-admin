import { ExceptionInfo } from "./ExceptionInfo";
import { Value36 } from "./Value36";

/**
 * GetCreditResult
 * @targetNSAlias `q124`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetCreditResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value36;
}
