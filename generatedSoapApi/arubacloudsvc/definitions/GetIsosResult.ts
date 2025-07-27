import { ExceptionInfo } from "./ExceptionInfo";
import { Value43 } from "./Value43";

/**
 * GetIsosResult
 * @targetNSAlias `q137`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetIsosResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value43;
}
