import { ExceptionInfo } from "./ExceptionInfo";
import { Value8 } from "./Value8";

/**
 * GetHybridLinksResult
 * @targetNSAlias `q41`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetHybridLinksResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value8;
}
