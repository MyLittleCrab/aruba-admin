import { ExceptionInfo } from "./ExceptionInfo";
import { Value9 } from "./Value9";

/**
 * GetHybridLinksPricingTypesResult
 * @targetNSAlias `q43`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetHybridLinksPricingTypesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value9;
}
