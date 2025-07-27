import { PublicIpAddressDetails } from "./PublicIpAddressDetails";

/**
 * PublicIpAddresses
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface PublicIpAddresses {
    /** PublicIpAddressDetails[] */
    PublicIpAddressDetails?: Array<PublicIpAddressDetails>;
}
