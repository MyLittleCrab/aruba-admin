import { ExceptionInfo } from "./ExceptionInfo";
import { Value71 } from "./Value71";

/**
 * GetPurchasedPrivateCloudsResult
 * @targetNSAlias `q281`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPurchasedPrivateCloudsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value71;
}
