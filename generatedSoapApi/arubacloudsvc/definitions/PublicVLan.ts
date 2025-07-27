import { FeatureTypes } from "./FeatureTypes";

/**
 * PublicVLan
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface PublicVLan {
    /** ClusterGroupTypes */
    ClusterGroupTypes?: FeatureTypes;
    /** xs:int */
    DataCenterID?: number;
    /** xs:string */
    Gateway?: string;
    /** xs:int */
    PublicVLanID?: number;
    /** xs:string */
    VLanCode?: string;
}
