import { ExceptionInfo } from "./ExceptionInfo";
import { Value63 } from "./Value63";

/**
 * GetControlToolActivationRequestsResult
 * @targetNSAlias `q251`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetControlToolActivationRequestsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value63;
}
