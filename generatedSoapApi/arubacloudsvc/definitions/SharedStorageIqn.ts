
/**
 * SharedStorageIQN
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SharedStorage`
 */
export interface SharedStorageIqn {
    /** xs:int */
    SharedStorageIQNID?: number;
    /** SharedStorageStatus|xs:string|Creating,Active,Deleting,Deleted */
    Status?: string;
    /** xs:string */
    Value?: string;
}
