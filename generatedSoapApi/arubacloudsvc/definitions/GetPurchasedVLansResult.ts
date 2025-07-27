import { ExceptionInfo } from "./ExceptionInfo";
import { VLans } from "./VLans";

/**
 * GetPurchasedVLansResult
 * @targetNSAlias `q126`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPurchasedVLansResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: VLans;
}
