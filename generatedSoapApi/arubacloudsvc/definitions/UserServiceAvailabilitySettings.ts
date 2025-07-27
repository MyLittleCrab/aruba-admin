import { CloudServices } from "./CloudServices";

/**
 * UserServiceAvailabilitySettings
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface UserServiceAvailabilitySettings {
    /** CloudServices */
    CloudServices?: CloudServices;
    /** xs:int */
    DataCenterID?: number;
    /** CompanyDataCenterStatuses|xs:string|NotEnableable,Disabled,Enabled */
    DataCenterStatus?: string;
}
