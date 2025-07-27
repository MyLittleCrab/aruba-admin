import { ExceptionInfo } from "./ExceptionInfo";
import { IpAddresses } from "./IpAddresses";

/**
 * GetPurchasedIpAddressesResult
 * @targetNSAlias `q127`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPurchasedIpAddressesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: IpAddresses;
}
