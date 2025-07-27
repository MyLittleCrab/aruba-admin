import { ExceptionInfo } from "./ExceptionInfo";
import { Value26 } from "./Value26";

/**
 * VerifyVPCUserOtpResult
 * @targetNSAlias `q97`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface VerifyVpcUserOtpResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value26;
}
