import { ExceptionInfo } from "./ExceptionInfo";
import { Value14 } from "./Value14";

/**
 * GetVirtualMachinePricingTypesResult
 * @targetNSAlias `q64`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetVirtualMachinePricingTypesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value14;
}
