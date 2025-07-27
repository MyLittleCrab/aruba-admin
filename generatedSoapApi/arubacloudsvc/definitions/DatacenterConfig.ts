
/**
 * DatacenterConfig
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface DatacenterConfig {
    /** xs:string */
    AdminPanelBaseUrl?: string;
    /** xs:string */
    Country?: string;
    /** DataCenterTypes|xs:string|Iaas,UniqueServices,NuovaCmp */
    DataCenterType?: string;
    /** xs:int */
    DatacenterId?: number;
    /** xs:string */
    Name?: string;
    /** xs:boolean */
    OpenStackProEnabled?: boolean;
    /** xs:boolean */
    OpenStackVPSEnabled?: boolean;
    /** xs:boolean */
    OpenStackVPSLowCostEnabled?: boolean;
    /** xs:int */
    Priority?: number;
    /** xs:boolean */
    PrivateCloudEnabled?: boolean;
    /** xs:boolean */
    SharedStorageEnabled?: boolean;
    /** xs:boolean */
    SmartVMWareEnabled?: boolean;
    /** DatacenterConfigStatus|xs:string|Enabled,Disabled,UnderMaintenance */
    Status?: string;
    /** xs:string */
    WsBaseUrl?: string;
}
