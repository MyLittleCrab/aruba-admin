import { ExceptionInfo } from "./ExceptionInfo";
import { Value27 } from "./Value27";

/**
 * GetVPCRolesResult
 * @targetNSAlias `q99`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetVpcRolesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value27;
}
