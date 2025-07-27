
/**
 * SoldOutSettingItem
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface SoldOutSettingItem {
    /** xs:int */
    DataCenterId?: number;
    /** xs:boolean */
    OpenstackVPSSoldOut?: boolean;
    /** xs:int */
    RecommendedDataCenterId?: number;
    /** xs:boolean */
    VmwareVPSSoldOut?: boolean;
}
