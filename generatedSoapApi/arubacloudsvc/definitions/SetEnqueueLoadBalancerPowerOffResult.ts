import { ExceptionInfo } from "./ExceptionInfo";

/**
 * SetEnqueueLoadBalancerPowerOffResult
 * @targetNSAlias `q5`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface SetEnqueueLoadBalancerPowerOffResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
}
