import { ExceptionInfo } from "./ExceptionInfo";
import { Value4 } from "./Value4";

/**
 * GetAdditionalIPServicesResult
 * @targetNSAlias `q28`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetAdditionalIpServicesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value4;
}
