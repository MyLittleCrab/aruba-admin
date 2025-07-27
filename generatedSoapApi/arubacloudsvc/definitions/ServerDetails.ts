import { ActiveJobs } from "./ActiveJobs";
import { PlannedChange } from "./PlannedChange";
import { CpuQuantity } from "./CpuQuantity";
import { IpAddress } from "./IpAddress";
import { CloudPackage } from "./CloudPackage";
import { Licenses } from "./Licenses";
import { MigratedFrom } from "./MigratedFrom";
import { NetworkAdapters } from "./NetworkAdapters";
import { OsTemplate } from "./OsTemplate";
import { OpenStackFlavor } from "./OpenStackFlavor";
import { Parameters } from "./Parameters";
import { RamQuantity } from "./RamQuantity";
import { ScheduledOperations } from "./ScheduledOperations";
import { Snapshots } from "./Snapshots";
import { VirtualDvDs } from "./VirtualDvDs";
import { VirtualDisks } from "./VirtualDisks";

/**
 * ServerDetails
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface ServerDetails {
    /** ActiveJobs */
    ActiveJobs?: ActiveJobs;
    /** xs:boolean */
    AutoRenewal?: boolean;
    /** CPUPlannedChange */
    CPUPlannedChange?: PlannedChange;
    /** CPUQuantity */
    CPUQuantity?: CpuQuantity;
    /** xs:boolean */
    CanBeMigrated?: boolean;
    /** xs:int */
    CompanyId?: number;
    /** xs:dateTime */
    ControlToolActivationDate?: Date;
    /** xs:boolean */
    ControlToolInstalled?: boolean;
    /** xs:dateTime */
    CreationDate?: Date;
    /** xs:int */
    DatacenterId?: number;
    /** EasyCloudIPAddress */
    EasyCloudIPAddress?: IpAddress;
    /** EasyCloudPackage */
    EasyCloudPackage?: CloudPackage;
    /** xs:int */
    EasyCloudPackageID?: number;
    /** xs:int */
    GuacamoleInstanceID?: number;
    /** HypervisorServerTypes|xs:string|All,HyperV,VMWare,OpenStack,Xen,Kvm */
    HypervisorServerType?: string;
    /** HypervisorTypes|xs:string|All,HyperV,VMWare,HyperVLowCost,SmartVMWare,OpenStackVPS,OpenStackVPSLowCost,OpenStackPro,OpenStackVPSSpecial */
    HypervisorType?: string;
    /** xs:boolean */
    IsMigrated?: boolean;
    /** Licenses */
    Licenses?: Licenses;
    /** MigratedFrom */
    MigratedFrom?: MigratedFrom;
    /** MigratedTo */
    MigratedTo?: MigratedFrom;
    /** xs:string */
    Name?: string;
    /** NetworkAdapters */
    NetworkAdapters?: NetworkAdapters;
    /** xs:string */
    Note?: string;
    /** OSTemplate */
    OSTemplate?: OsTemplate;
    /** OpenStackFlavor */
    OpenStackFlavor?: OpenStackFlavor;
    /** OpenStackFlavorPlannedChange */
    OpenStackFlavorPlannedChange?: PlannedChange;
    /** Parameters */
    Parameters?: Parameters;
    /** PricingTypePlannedChange */
    PricingTypePlannedChange?: PlannedChange;
    /** RAMPlannedChange */
    RAMPlannedChange?: PlannedChange;
    /** RAMQuantity */
    RAMQuantity?: RamQuantity;
    /** xs:dateTime */
    RenewDateSmart?: Date;
    /** xs:dateTime */
    RenewalDate?: Date;
    /** xs:dateTime */
    SavingIPForcedDeassociationDate?: Date;
    /** ScheduledOperations */
    ScheduledOperations?: ScheduledOperations;
    /** xs:int */
    ServerId?: number;
    /** ServerStatus|xs:string|Creating,Stopped,Running,Archived,Deleted */
    ServerStatus?: string;
    /** Snapshots */
    Snapshots?: Snapshots;
    /** xs:boolean */
    ToolsAvailable?: boolean;
    /** xs:string */
    UniqueName?: string;
    /** xs:int */
    UserId?: number;
    /** VirtualDVDs */
    VirtualDVDs?: VirtualDvDs;
    /** VirtualDisks */
    VirtualDisks?: VirtualDisks;
    /** xs:int */
    VirtualMachinePricingTypeID?: number;
    /** xs:int */
    VncPort?: number;
}
