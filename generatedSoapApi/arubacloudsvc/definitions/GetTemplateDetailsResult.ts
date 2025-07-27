import { ExceptionInfo } from "./ExceptionInfo";
import { TemplateDetails } from "./TemplateDetails";

/**
 * GetTemplateDetailsResult
 * @targetNSAlias `q146`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetTemplateDetailsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: TemplateDetails;
}
