import { ExceptionInfo } from "./ExceptionInfo";
import { Value56 } from "./Value56";

/**
 * GetRemoteAccessUrlAsyncResponseResult
 * @targetNSAlias `q164`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetRemoteAccessUrlAsyncResponseResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value56;
}
