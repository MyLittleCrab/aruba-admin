import { ExceptionInfo } from "./ExceptionInfo";
import { Value19 } from "./Value19";

/**
 * GetPrivateCloudResourcesResult
 * @targetNSAlias `q76`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPrivateCloudResourcesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value19;
}
