import { ExceptionInfo } from "./ExceptionInfo";
import { Value53 } from "./Value53";

/**
 * GetAdditionalServicesResult
 * @targetNSAlias `q157`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetAdditionalServicesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value53;
}
