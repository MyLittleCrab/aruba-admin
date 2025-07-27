import { ExceptionInfo } from "./ExceptionInfo";
import { Value38 } from "./Value38";

/**
 * GetOpenStackFlavorsResult
 * @targetNSAlias `q129`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetOpenStackFlavorsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value38;
}
