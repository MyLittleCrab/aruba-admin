
/**
 * CustomProductCost
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.CustomProduct`
 */
export interface CustomProductCost {
    /** xs:decimal */
    TotalHourlyCost?: number;
    /** xs:decimal */
    HourlyCost?: number;
    /** xs:int */
    ProductId?: number;
    /** xs:int */
    Quantity?: number;
    /** ResourceTypes|xs:string|Ram,Cpu,HardDisk0,OSTemplate,VLan,Ip,HardDisk1,HardDisk2,HardDisk3,FTP,LicensePlesk,LicensePleskAddon,AssistanceOnDemand,CloudStorageSize,CloudStorageDownloadBandwidth,CloudStorageUploadBandwidth,CloudStorageRequests,CloudStoragePacket,Domain,DomainPrivacy,DNS,SharedStorage,SharedStorageUpgrade,MonitoringClassOfServices,Sms,PrivateCloud,PrivateCloudCPU,PrivateCloudDisk,PrivateCloudRAM,PrivateCloudVLan,PrivateCloudIP,LoadBalancer,CustomCloudProduct,SmartVMWare,BackupPacket,BackupDownloadBandwidth,BackupUploadBandwidth,BackupClient,BackupSize,Firewall,DedicatedNetwork,License,Software,JelasticPacket,JelasticStorage,JelasticFixedCloudLet,JelasticFlexibleCloudLet,JelasticPublicIP,DbaasPacket,DbaasStorage,DbaasCPU,DbaasRAM,DbaasBackup,DbaasConnections,DRaaS,HybridLink,VirtualMachineProPacket,OpenStackFlavor,PrivateCloudOrganization,PrivateCloudMonitoring,PrivateCloudEncryption,PrivateCloudContainerService,BaasM365Packet,BaasM365Infrastructure,BaasM365BackupUser,BaasM365Storage,BaasM365StorageSecondCopy */
    ResourceType?: string;
    /** BillingTypes|xs:string|TimeBased,OneTime,CalendarMonth,Monthly,TwoMonthly,ThreeMonthly,FourMonthly,HalfYearly,Yearly */
    BillingType?: string;
    /** xs:string */
    ProductName?: string;
    /** xs:decimal */
    UnitPrice?: number;
}
