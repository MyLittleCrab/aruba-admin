import { ExceptionInfo } from "./ExceptionInfo";
import { Value10 } from "./Value10";

/**
 * GetPurchasedPrivateCloudsBaseResult
 * @targetNSAlias `q49`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPurchasedPrivateCloudsBaseResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value10;
}
