import { ExceptionInfo } from "./ExceptionInfo";
import { LoadBalancers } from "./LoadBalancers";

/**
 * GetLoadBalancersResult
 * @targetNSAlias `q303`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetLoadBalancersResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: LoadBalancers;
}
