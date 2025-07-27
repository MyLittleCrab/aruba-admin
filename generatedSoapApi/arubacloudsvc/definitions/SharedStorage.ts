import { PrivateVlan } from "./PrivateVlan";
import { SharedStorageIqNs } from "./SharedStorageIqNs";
import { SharedStorageResources } from "./SharedStorageResources";

/**
 * SharedStorage
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SharedStorage`
 */
export interface SharedStorage {
    /** xs:int */
    CompanyID?: number;
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    DataCenterID?: number;
    /** xs:dateTime */
    DeletionDate?: Date;
    /** xs:string */
    MountPoint?: string;
    /** PrivateVlan */
    PrivateVlan?: PrivateVlan;
    /** xs:int */
    SharedStorageID?: number;
    /** SharedStorageIQNs */
    SharedStorageIQNs?: SharedStorageIqNs;
    /** xs:string */
    SharedStorageName?: string;
    /** SharedStorageProtocolType|xs:string|CIFS,ISCSI,NFS */
    SharedStorageProtocolType?: string;
    /** SharedStorageResources */
    SharedStorageResources?: SharedStorageResources;
    /** SharedStorageStatus|xs:string|Creating,Active,Deleting,Deleted */
    Status?: string;
    /** xs:int */
    UserID?: number;
}
