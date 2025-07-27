import { ConnectedVm } from "./ConnectedVm";

/**
 * ConnectedVMs
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SharedStorage`
 */
export interface ConnectedVMs {
    /** ConnectedVM[] */
    ConnectedVM?: Array<ConnectedVm>;
}
