
/**
 * RamHistory
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface RamHistory1 {
    /** xs:decimal */
    AvailableQuantity?: number;
    /** xs:dateTime */
    HistoryTime?: Date;
    /** guid|xs:string|pattern */
    RequestID?: string;
    /** xs:decimal */
    TotalQuantity?: number;
    /** xs:decimal */
    UsedQuantity?: number;
}
