import { ExceptionInfo } from "./ExceptionInfo";
import { Value73 } from "./Value73";

/**
 * GetPrivateCloudOrganizationsResult
 * @targetNSAlias `q290`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface GetPrivateCloudOrganizationsResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: Value73;
}
