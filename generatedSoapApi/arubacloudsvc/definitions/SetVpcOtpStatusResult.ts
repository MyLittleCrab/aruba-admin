import { ExceptionInfo } from "./ExceptionInfo";
import { Value25 } from "./Value25";

/**
 * SetVPCOtpStatusResult
 * @targetNSAlias `q91`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface SetVpcOtpStatusResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value25;
}
