import { SharedStorageIqNs } from "./SharedStorageIqNs";

/**
 * operationRequest
 * @targetNSAlias `q231`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SharedStorage`
 */
export interface OperationRequest11 {
    /** xs:int */
    Quantity?: number;
    /** SharedStorageIQNs */
    SharedStorageIQNs?: SharedStorageIqNs;
    /** xs:string */
    SharedStorageName?: string;
    /** SharedStorageProtocolType|xs:string|CIFS,ISCSI,NFS */
    SharedStorageProtocolType?: string;
    /** xs:string */
    Type?: string;
}
