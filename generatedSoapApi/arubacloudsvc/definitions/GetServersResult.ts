import { ExceptionInfo } from "./ExceptionInfo";
import { Value34 } from "./Value34";

/**
 * GetServersResult
 * @targetNSAlias `q118`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetServersResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value34;
}
