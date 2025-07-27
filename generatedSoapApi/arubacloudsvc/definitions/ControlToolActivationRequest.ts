import { Hosts } from "./Hosts";

/**
 * ControlToolActivationRequest
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface ControlToolActivationRequest {
    /** xs:dateTime */
    ExpirationDate?: Date;
    /** xs:dateTime */
    RequestDate?: Date;
    /** Servers */
    Servers?: Hosts;
}
