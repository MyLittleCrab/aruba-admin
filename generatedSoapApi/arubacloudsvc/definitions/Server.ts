
/**
 * Server
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Server {
    /** xs:boolean */
    Busy?: boolean;
    /** xs:int */
    CPUQuantity?: number;
    /** xs:int */
    CompanyId?: number;
    /** xs:int */
    DatacenterId?: number;
    /** xs:int */
    HDQuantity?: number;
    /** xs:int */
    HDTotalSize?: number;
    /** HypervisorServerTypes|xs:string|All,HyperV,VMWare,OpenStack,Xen,Kvm */
    HypervisorServerType?: string;
    /** HypervisorTypes|xs:string|All,HyperV,VMWare,HyperVLowCost,SmartVMWare,OpenStackVPS,OpenStackVPSLowCost,OpenStackPro,OpenStackVPSSpecial */
    HypervisorType?: string;
    /** xs:string */
    Name?: string;
    /** xs:int */
    OSTemplateId?: number;
    /** xs:int */
    RAMQuantity?: number;
    /** xs:int */
    ServerId?: number;
    /** ServerStatus|xs:string|Creating,Stopped,Running,Archived,Deleted */
    ServerStatus?: string;
    /** xs:int */
    UserId?: number;
    /** xs:int */
    VirtualMachinePricingTypeID?: number;
}
