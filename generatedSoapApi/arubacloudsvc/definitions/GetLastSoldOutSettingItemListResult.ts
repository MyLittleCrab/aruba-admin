import { ExceptionInfo } from "./ExceptionInfo";
import { Value7 } from "./Value7";

/**
 * GetLastSoldOutSettingItemListResult
 * @targetNSAlias `q39`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetLastSoldOutSettingItemListResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value7;
}
