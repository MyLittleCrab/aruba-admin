import { AdditionalLicenses } from "./AdditionalLicenses";
import { NetworkAdaptersConfiguration } from "./NetworkAdaptersConfiguration";
import { VirtualDisks1 } from "./VirtualDisks1";

/**
 * server
 * @targetNSAlias `q172`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Server1 {
    /** AdditionalLicenses */
    AdditionalLicenses?: AdditionalLicenses;
    /** xs:string */
    AdministratorPassword?: string;
    /** xs:int */
    CPUQuantity?: number;
    /** xs:boolean */
    ConfigureIPv4ForVPSStarter?: boolean;
    /** xs:boolean */
    ConfigureIPv6?: boolean;
    /** xs:boolean */
    IsLuckySmart?: boolean;
    /** xs:int */
    MigrateServerID?: number;
    /** xs:string */
    Name?: string;
    /** NetworkAdaptersConfiguration */
    NetworkAdaptersConfiguration?: NetworkAdaptersConfiguration;
    /** xs:string */
    Note?: string;
    /** xs:int */
    OSTemplateId?: number;
    /** xs:int */
    OSTemplateProductId?: number;
    /** xs:int */
    OpenStackFlavorID?: number;
    /** xs:int */
    RAMQuantity?: number;
    /** xs:int */
    SmartVMWarePackageID?: number;
    /** xs:string */
    SshKey?: string;
    /** xs:boolean */
    SshPasswordAuthAllowed?: boolean;
    /** xs:int */
    VMMServerTypeId?: number;
    /** VirtualDisks */
    VirtualDisks?: VirtualDisks1;
    /** xs:int */
    VirtualMachinePricingTypeID?: number;
}
