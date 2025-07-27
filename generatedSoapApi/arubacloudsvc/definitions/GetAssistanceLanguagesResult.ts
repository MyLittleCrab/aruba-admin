import { ExceptionInfo } from "./ExceptionInfo";
import { Value66 } from "./Value66";

/**
 * GetAssistanceLanguagesResult
 * @targetNSAlias `q262`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetAssistanceLanguagesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value66;
}
