import { ExceptionInfo } from "./ExceptionInfo";
import { Value13 } from "./Value13";

/**
 * GetSharedStorageDetailsResult
 * @targetNSAlias `q52`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetSharedStorageDetailsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value13;
}
