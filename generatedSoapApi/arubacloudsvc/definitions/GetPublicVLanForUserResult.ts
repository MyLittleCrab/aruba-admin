import { ExceptionInfo } from "./ExceptionInfo";
import { Value21 } from "./Value21";

/**
 * GetPublicVLanForUserResult
 * @targetNSAlias `q79`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPublicVLanForUserResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value21;
}
