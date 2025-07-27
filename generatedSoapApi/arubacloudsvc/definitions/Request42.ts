import { PrivateCloudOrganization } from "./PrivateCloudOrganization";
import { VirtualDataCenters } from "./VirtualDataCenters";

/**
 * request
 * @targetNSAlias `q275`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface Request42 {
    /** PrivateCloudOrganization */
    PrivateCloudOrganization?: PrivateCloudOrganization;
    /** xs:string */
    PromoCode?: string;
    /** VirtualDataCenters */
    VirtualDataCenters?: VirtualDataCenters;
}
