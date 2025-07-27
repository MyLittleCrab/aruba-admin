import { ExceptionInfo } from "./ExceptionInfo";
import { Value76 } from "./Value76";

/**
 * GetActivatedPrivateCloudFeaturesResult
 * @targetNSAlias `q296`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetActivatedPrivateCloudFeaturesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value76;
}
