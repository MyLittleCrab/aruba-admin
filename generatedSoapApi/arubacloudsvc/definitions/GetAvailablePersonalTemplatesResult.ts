import { ExceptionInfo } from "./ExceptionInfo";
import { Value50 } from "./Value50";

/**
 * GetAvailablePersonalTemplatesResult
 * @targetNSAlias `q150`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetAvailablePersonalTemplatesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value50;
}
