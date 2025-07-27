import { ExceptionInfo } from "./ExceptionInfo";
import { Value69 } from "./Value69";

/**
 * SetEnqueuePurchasePrivateCloudResult
 * @targetNSAlias `q276`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface SetEnqueuePurchasePrivateCloudResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value69;
}
