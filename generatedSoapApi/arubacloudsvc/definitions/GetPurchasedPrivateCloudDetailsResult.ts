import { ExceptionInfo } from "./ExceptionInfo";
import { Value72 } from "./Value72";

/**
 * GetPurchasedPrivateCloudDetailsResult
 * @targetNSAlias `q282`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPurchasedPrivateCloudDetailsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value72;
}
