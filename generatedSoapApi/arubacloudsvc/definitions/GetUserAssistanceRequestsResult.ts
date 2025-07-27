import { ExceptionInfo } from "./ExceptionInfo";
import { Value68 } from "./Value68";

/**
 * GetUserAssistanceRequestsResult
 * @targetNSAlias `q274`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetUserAssistanceRequestsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value68;
}
