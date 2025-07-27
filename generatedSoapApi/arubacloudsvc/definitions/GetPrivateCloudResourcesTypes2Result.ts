import { ExceptionInfo } from "./ExceptionInfo";
import { PrivateCloudResurcesTypes } from "./PrivateCloudResurcesTypes";

/**
 * GetPrivateCloudResourcesTypes2Result
 * @targetNSAlias `q280`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPrivateCloudResourcesTypes2Result {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: PrivateCloudResurcesTypes;
}
