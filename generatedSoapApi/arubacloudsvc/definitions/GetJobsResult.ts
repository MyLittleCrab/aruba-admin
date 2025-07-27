import { ExceptionInfo } from "./ExceptionInfo";
import { ActiveJobs } from "./ActiveJobs";

/**
 * GetJobsResult
 * @targetNSAlias `q130`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetJobsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: ActiveJobs;
}
