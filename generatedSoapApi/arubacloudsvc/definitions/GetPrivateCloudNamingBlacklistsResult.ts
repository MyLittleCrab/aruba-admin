import { ExceptionInfo } from "./ExceptionInfo";
import { Value22 } from "./Value22";

/**
 * GetPrivateCloudNamingBlacklistsResult
 * @targetNSAlias `q82`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPrivateCloudNamingBlacklistsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value22;
}
