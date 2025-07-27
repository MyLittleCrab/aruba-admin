import { ExceptionInfo } from "./ExceptionInfo";
import { Value11 } from "./Value11";

/**
 * GetCountriesResult
 * @targetNSAlias `q50`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetCountriesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value11;
}
