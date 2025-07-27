import { ExceptionInfo } from "./ExceptionInfo";
import { VLan } from "./VLan";

/**
 * SetPurchaseVLanResult
 * @targetNSAlias `q214`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Common`
 */
export interface SetPurchaseVLanResult {
    /** ExceptionInfo */
    ExceptionInfo?: ExceptionInfo;
    /** xs:int */
    ResultCode?: number;
    /** xs:string */
    ResultMessage?: string;
    /** xs:boolean */
    Success?: boolean;
    /** Value */
    Value?: VLan;
}
