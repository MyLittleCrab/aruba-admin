import { ExceptionInfo } from "./ExceptionInfo";
import { Ftp } from "./Ftp";

/**
 * GetPurchasedFTPResult
 * @targetNSAlias `q139`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPurchasedFtpResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Ftp;
}
