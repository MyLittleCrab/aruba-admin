import { ExceptionInfo } from "./ExceptionInfo";
import { IpAddress } from "./IpAddress";

/**
 * SetPurchaseIpAddressResult
 * @targetNSAlias `q208`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface SetPurchaseIpAddressResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: IpAddress;
}
