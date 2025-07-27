import { ExceptionInfo } from "./ExceptionInfo";
import { Value44 } from "./Value44";

/**
 * GetUserInfoResult
 * @targetNSAlias `q138`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetUserInfoResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value44;
}
