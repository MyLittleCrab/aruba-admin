import { ExceptionInfo } from "./ExceptionInfo";
import { Value29 } from "./Value29";

/**
 * GetCompanyByUrlResult
 * @targetNSAlias `q108`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetCompanyByUrlResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value29;
}
