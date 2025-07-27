import { ExceptionInfo } from "./ExceptionInfo";

/**
 * GetRemoteAccessUrlResult
 * @targetNSAlias `q161`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetRemoteAccessUrlResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** xs:string */
    Value?: string;
}
