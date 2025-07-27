import { ExceptionInfo } from "./ExceptionInfo";
import { Value28 } from "./Value28";

/**
 * GetUserAuthenticationTokenResult
 * @targetNSAlias `q107`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetUserAuthenticationTokenResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value28;
}
