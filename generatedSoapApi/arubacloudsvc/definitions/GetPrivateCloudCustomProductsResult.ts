import { ExceptionInfo } from "./ExceptionInfo";
import { Value20 } from "./Value20";

/**
 * GetPrivateCloudCustomProductsResult
 * @targetNSAlias `q78`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPrivateCloudCustomProductsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value20;
}
