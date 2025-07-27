import { ExceptionInfo } from "./ExceptionInfo";
import { Value31 } from "./Value31";

/**
 * GetApplianceTypesResult
 * @targetNSAlias `q111`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetApplianceTypesResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value31;
}
