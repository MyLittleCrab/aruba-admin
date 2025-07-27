import { ExceptionInfo } from "./ExceptionInfo";
import { Value37 } from "./Value37";

/**
 * GetPriceListResult
 * @targetNSAlias `q125`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPriceListResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value37;
}
