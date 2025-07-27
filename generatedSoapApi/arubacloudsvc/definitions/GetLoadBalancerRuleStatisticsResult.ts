import { ExceptionInfo } from "./ExceptionInfo";
import { Value1 } from "./Value1";

/**
 * GetLoadBalancerRuleStatisticsResult
 * @targetNSAlias `q4`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetLoadBalancerRuleStatisticsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value1;
}
