
/**
 * request
 * @targetNSAlias `q25`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SmartVMWare`
 */
export interface Request10 {
    /** HypervisorTypes|xs:string|All,HyperV,VMWare,HyperVLowCost,SmartVMWare,OpenStackVPS,OpenStackVPSLowCost,OpenStackPro,OpenStackVPSSpecial */
    HypervisorType?: string;
    /** xs:boolean */
    IncludeMigrationPackages?: boolean;
}
