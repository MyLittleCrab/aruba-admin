import { Hosts } from "./Hosts";

/**
 * request
 * @targetNSAlias `q94`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Request34 {
    /** xs:int */
    PrivateCloudOrganizationID?: number;
    /** Usernames */
    Usernames?: Hosts;
}
