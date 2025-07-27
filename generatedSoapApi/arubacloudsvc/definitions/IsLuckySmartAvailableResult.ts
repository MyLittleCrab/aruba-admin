import { ExceptionInfo } from "./ExceptionInfo";

/**
 * IsLuckySmartAvailableResult
 * @targetNSAlias `q38`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface IsLuckySmartAvailableResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** xs:boolean */
    Value?: boolean;
}
