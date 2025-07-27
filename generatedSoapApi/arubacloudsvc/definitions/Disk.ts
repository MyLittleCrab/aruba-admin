
/**
 * Disk
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Disk {
    /** xs:decimal */
    AvailableQuantity?: number;
    /** xs:string */
    DiskName?: string;
    /** xs:decimal */
    TotalQuantity?: number;
    /** xs:decimal */
    UsedPercentage?: number;
    /** xs:decimal */
    UsedQuantity?: number;
}
