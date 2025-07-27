import { BillingType } from "./BillingType";
import { AdditionalServices } from "./AdditionalServices";
import { Cpu } from "./Cpu";
import { Items4 } from "./Items4";
import { DedicatedNetworks } from "./DedicatedNetworks";
import { Disks } from "./Disks";
import { PrivateCloudPricingType } from "./PrivateCloudPricingType";
import { SharedNetwork } from "./SharedNetwork";
import { WindowsCore } from "./WindowsCore";

/**
 * Value
 * @targetNSAlias `q87`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface Value72 {
    /** xs:boolean */
    Autorenewal?: boolean;
    /** xs:int */
    CPUQuantity?: number;
    /** xs:int */
    CompanyID?: number;
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:dateTime */
    DeletionDate?: Date;
    /** xs:int */
    DisksQuantity?: number;
    /** xs:boolean */
    Elastic?: boolean;
    /** xs:string */
    Name?: string;
    /** xs:string */
    PricingTypeCode?: string;
    /** xs:int */
    PricingTypeID?: number;
    /** xs:int */
    PrivateCloudInstanceID?: number;
    /** xs:int */
    RAMQuantity?: number;
    /** xs:int */
    ResourceID?: number;
    /** Status */
    Status?: BillingType;
    /** xs:int */
    UserID?: number;
    /** AdditionalServices */
    AdditionalServices?: AdditionalServices;
    /** CPU */
    CPU?: Cpu;
    /** CustomProducts */
    CustomProducts?: Items4;
    /** DedicatedNetworks */
    DedicatedNetworks?: DedicatedNetworks;
    /** xs:string */
    Description?: string;
    /** Disks */
    Disks?: Disks;
    /** PricingType */
    PricingType?: PrivateCloudPricingType;
    /** RAM */
    RAM?: Cpu;
    /** RAM_DR */
    RAM_DR?: Cpu;
    /** SharedNetwork */
    SharedNetwork?: SharedNetwork;
    /** VLan */
    VLan?: Cpu;
    /** WindowsCore */
    WindowsCore?: WindowsCore;
    /** xs:int */
    CellOrg?: number;
    /** xs:int */
    DataCenterOrg?: number;
    /** xs:string */
    EmailOrg?: string;
    /** xs:dateTime */
    EndValidBillingDate?: Date;
    /** xs:int */
    IDOrg?: number;
    /** xs:string */
    NameOrg?: string;
    /** xs:string */
    TelephoneOrg?: string;
    /** xs:boolean */
    UserCanEditOrg?: boolean;
}
