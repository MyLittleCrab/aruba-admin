import { ExceptionInfo } from "./ExceptionInfo";
import { Value32 } from "./Value32";

/**
 * GetVirtualDatacenterResult
 * @targetNSAlias `q116`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetVirtualDatacenterResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value32;
}
