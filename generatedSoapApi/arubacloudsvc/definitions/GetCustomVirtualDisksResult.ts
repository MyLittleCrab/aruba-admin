import { ExceptionInfo } from "./ExceptionInfo";
import { Value42 } from "./Value42";

/**
 * GetCustomVirtualDisksResult
 * @targetNSAlias `q136`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetCustomVirtualDisksResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value42;
}
