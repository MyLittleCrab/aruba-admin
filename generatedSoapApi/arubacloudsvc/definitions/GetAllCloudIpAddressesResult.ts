import { ExceptionInfo } from "./ExceptionInfo";
import { Value5 } from "./Value5";

/**
 * GetAllCloudIpAddressesResult
 * @targetNSAlias `q31`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetAllCloudIpAddressesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value5;
}
