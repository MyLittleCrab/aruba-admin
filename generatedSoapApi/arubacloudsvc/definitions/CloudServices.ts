import { CloudService } from "./CloudService";

/**
 * CloudServices
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface CloudServices {
    /** CloudService[] */
    CloudService?: Array<CloudService>;
}
