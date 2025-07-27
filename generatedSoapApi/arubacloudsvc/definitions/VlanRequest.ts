import { PrivateIps } from "./PrivateIps";

/**
 * vlanRequest
 * @targetNSAlias `q217`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface VlanRequest {
    /** xs:int */
    NetworkAdapterId?: number;
    /** xs:boolean */
    SetOnVirtualMachine?: boolean;
    /** xs:int */
    VLanResourceId?: number;
    /** PrivateIps */
    PrivateIps?: PrivateIps;
}
