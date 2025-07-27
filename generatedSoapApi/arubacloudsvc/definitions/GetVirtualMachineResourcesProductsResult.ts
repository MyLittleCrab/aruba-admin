import { ExceptionInfo } from "./ExceptionInfo";
import { Value61 } from "./Value61";

/**
 * GetVirtualMachineResourcesProductsResult
 * @targetNSAlias `q175`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetVirtualMachineResourcesProductsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value61;
}
