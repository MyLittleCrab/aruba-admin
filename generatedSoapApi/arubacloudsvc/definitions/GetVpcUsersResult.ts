import { ExceptionInfo } from "./ExceptionInfo";
import { Value23 } from "./Value23";

/**
 * GetVPCUsersResult
 * @targetNSAlias `q87`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetVpcUsersResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value23;
}
