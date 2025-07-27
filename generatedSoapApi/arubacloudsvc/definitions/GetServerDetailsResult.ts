import { ExceptionInfo } from "./ExceptionInfo";
import { ServerDetails } from "./ServerDetails";

/**
 * GetServerDetailsResult
 * @targetNSAlias `q123`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetServerDetailsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: ServerDetails;
}
