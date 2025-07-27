import { ExceptionInfo } from "./ExceptionInfo";
import { Value75 } from "./Value75";

/**
 * GetHybridLinksbyOrgResult
 * @targetNSAlias `q294`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetHybridLinksbyOrgResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value75;
}
