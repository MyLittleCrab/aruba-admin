import { Templates } from "./Templates";

/**
 * Hypervisor
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Hypervisor {
    /** HypervisorServerTypes|xs:string|All,HyperV,VMWare,OpenStack,Xen,Kvm */
    HypervisorServerType?: string;
    /** HypervisorTypes|xs:string|All,HyperV,VMWare,HyperVLowCost,SmartVMWare,OpenStackVPS,OpenStackVPSLowCost,OpenStackPro,OpenStackVPSSpecial */
    HypervisorType?: string;
    /** Templates */
    Templates?: Templates;
}
