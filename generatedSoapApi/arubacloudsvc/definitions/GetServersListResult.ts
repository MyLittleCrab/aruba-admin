import { ExceptionInfo } from "./ExceptionInfo";
import { Servers } from "./Servers";

/**
 * GetServersListResult
 * @targetNSAlias `q120`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetServersListResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Servers;
}
