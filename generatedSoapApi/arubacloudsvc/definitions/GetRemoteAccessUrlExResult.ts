import { ExceptionInfo } from "./ExceptionInfo";
import { Value55 } from "./Value55";

/**
 * GetRemoteAccessUrlExResult
 * @targetNSAlias `q163`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetRemoteAccessUrlExResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value55;
}
