import { ExceptionInfo } from "./ExceptionInfo";
import { Hypervisor } from "./Hypervisor";

/**
 * GetHypervisorDetailsResult
 * @targetNSAlias `q115`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetHypervisorDetailsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Hypervisor;
}
