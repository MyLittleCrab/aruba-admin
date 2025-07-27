import { ExceptionInfo } from "./ExceptionInfo";
import { Value2 } from "./Value2";

/**
 * GetLoadBalancerNotificationsResult
 * @targetNSAlias `q7`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetLoadBalancerNotificationsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value2;
}
