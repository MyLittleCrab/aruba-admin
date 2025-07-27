import { Addons } from "./Addons";
import { ConnectedVMs } from "./ConnectedVMs";
import { BillingType } from "./BillingType";
import { Resources } from "./Resources";
import { UserPrivateVlan } from "./UserPrivateVlan";

/**
 * Value
 * @targetNSAlias `q15`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SharedStorage`
 */
export interface Value13 {
    /** Addons */
    Addons?: Addons;
    /** xs:int */
    CompanyID?: number;
    /** ConnectedVMs */
    ConnectedVMs?: ConnectedVMs;
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    DataCenterID?: number;
    /** xs:dateTime */
    DeletionDate?: Date;
    /** xs:string */
    MountPoint?: string;
    /** xs:string */
    Name?: string;
    /** ProtocolType */
    ProtocolType?: BillingType;
    /** Resources */
    Resources?: Resources;
    /** xs:int */
    SharedStorageID?: number;
    /** Status */
    Status?: BillingType;
    /** xs:int */
    UserID?: number;
    /** UserPrivateVLAN */
    UserPrivateVLAN?: UserPrivateVlan;
}
