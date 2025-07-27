import { ExceptionInfo } from "./ExceptionInfo";
import { Value18 } from "./Value18";

/**
 * GetPrivateCloudPricingTypesResult
 * @targetNSAlias `q74`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPrivateCloudPricingTypesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value18;
}
