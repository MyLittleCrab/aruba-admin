import { Hosts } from "./Hosts";

/**
 * ReverseDns
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface ReverseDns {
    /** Hosts */
    Hosts?: Hosts;
    /** xs:string */
    Ip?: string;
    /** xs:string */
    Status?: string;
}
