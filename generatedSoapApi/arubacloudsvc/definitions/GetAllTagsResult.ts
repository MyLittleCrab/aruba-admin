import { ExceptionInfo } from "./ExceptionInfo";
import { Tags } from "./Tags";

/**
 * GetAllTagsResult
 * @targetNSAlias `q113`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetAllTagsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Tags;
}
