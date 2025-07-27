import { ProductInfo } from "./ProductInfo";

/**
 * IpAddress
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface IpAddress {
    /** xs:int */
    CompanyId?: number;
    /** xs:int */
    ProductId?: number;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** xs:int */
    ResourceId?: number;
    /** ResourceTypes|xs:string|Ram,Cpu,HardDisk0,OSTemplate,VLan,Ip,HardDisk1,HardDisk2,HardDisk3,FTP,LicensePlesk,LicensePleskAddon,AssistanceOnDemand,CloudStorageSize,CloudStorageDownloadBandwidth,CloudStorageUploadBandwidth,CloudStorageRequests,CloudStoragePacket,Domain,DomainPrivacy,DNS,SharedStorage,SharedStorageUpgrade,MonitoringClassOfServices,Sms,PrivateCloud,PrivateCloudCPU,PrivateCloudDisk,PrivateCloudRAM,PrivateCloudVLan,PrivateCloudIP,LoadBalancer,CustomCloudProduct,SmartVMWare,BackupPacket,BackupDownloadBandwidth,BackupUploadBandwidth,BackupClient,BackupSize,Firewall,DedicatedNetwork,License,Software,JelasticPacket,JelasticStorage,JelasticFixedCloudLet,JelasticFlexibleCloudLet,JelasticPublicIP,DbaasPacket,DbaasStorage,DbaasCPU,DbaasRAM,DbaasBackup,DbaasConnections,DRaaS,HybridLink,VirtualMachineProPacket,OpenStackFlavor,PrivateCloudOrganization,PrivateCloudMonitoring,PrivateCloudEncryption,PrivateCloudContainerService,BaasM365Packet,BaasM365Infrastructure,BaasM365BackupUser,BaasM365Storage,BaasM365StorageSecondCopy */
    ResourceType?: string;
    /** xs:int */
    UserId?: number;
    /** xs:int */
    ClusterGroupTypeID?: number;
    /** xs:string */
    EndRangeIPv6?: string;
    /** xs:string */
    Gateway?: string;
    /** xs:string */
    GatewayIPv6?: string;
    /** xs:string */
    Hypervisors?: string;
    /** xs:int */
    LoadBalancerID?: number;
    /** xs:dateTime */
    NetworkAdapterPublicIpAssociationDate?: Date;
    /** xs:int */
    PrefixIPv6?: number;
    /** xs:int */
    ServerId?: number;
    /** xs:string */
    StartRangeIPv6?: string;
    /** xs:string */
    SubNetMask?: string;
    /** xs:string */
    SubnetPrefixIPv6?: string;
    /** xs:string */
    Value?: string;
}
