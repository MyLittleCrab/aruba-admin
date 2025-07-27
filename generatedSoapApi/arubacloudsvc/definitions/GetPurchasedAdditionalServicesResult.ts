import { ExceptionInfo } from "./ExceptionInfo";
import { Value54 } from "./Value54";

/**
 * GetPurchasedAdditionalServicesResult
 * @targetNSAlias `q159`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPurchasedAdditionalServicesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value54;
}
