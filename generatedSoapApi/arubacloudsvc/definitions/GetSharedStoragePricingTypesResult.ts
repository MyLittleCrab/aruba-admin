import { ExceptionInfo } from "./ExceptionInfo";
import { Value12 } from "./Value12";

/**
 * GetSharedStoragePricingTypesResult
 * @targetNSAlias `q51`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetSharedStoragePricingTypesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value12;
}
