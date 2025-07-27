import { SharedStorageIqNs } from "./SharedStorageIqNs";

/**
 * operationRequest
 * @targetNSAlias `q239`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SharedStorage`
 */
export interface OperationRequest15 {
    /** xs:int */
    SharedStorageID?: number;
    /** SharedStorageIQNs */
    SharedStorageIQNs?: SharedStorageIqNs;
}
