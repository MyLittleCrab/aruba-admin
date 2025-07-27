import { PrivateIps } from "./PrivateIps";

/**
 * Value
 * @targetNSAlias `q78`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Value64 {
    /** IPConfigurations */
    IPConfigurations?: PrivateIps;
    /** xs:string */
    MACAddress?: string;
}
