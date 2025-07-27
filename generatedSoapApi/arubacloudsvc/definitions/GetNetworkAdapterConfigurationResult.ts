import { ExceptionInfo } from "./ExceptionInfo";
import { Value64 } from "./Value64";

/**
 * GetNetworkAdapterConfigurationResult
 * @targetNSAlias `q254`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetNetworkAdapterConfigurationResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value64;
}
