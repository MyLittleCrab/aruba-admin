import { ExceptionInfo } from "./ExceptionInfo";
import { Value33 } from "./Value33";

/**
 * GetVirtualDatacenterCostResult
 * @targetNSAlias `q117`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetVirtualDatacenterCostResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value33;
}
