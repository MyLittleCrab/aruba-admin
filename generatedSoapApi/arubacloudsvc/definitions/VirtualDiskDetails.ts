
/**
 * VirtualDiskDetails
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface VirtualDiskDetails {
    /** xs:string */
    CustomVirtualDiskPath?: string;
    /** xs:int */
    Size?: number;
    /** VirtualDiskTypes|xs:string|PrimaryVirtualDisk,AdditionalVirtualDisk1,AdditionalVirtualDisk2,AdditionalVirtualDisk3 */
    VirtualDiskType?: string;
}
