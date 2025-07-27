import { Descriptions } from "./Descriptions";
import { LoadBalancerContactsId } from "./LoadBalancerContactsId";
import { UserOffer } from "./UserOffer";

/**
 * CloudPackage
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SmartVMWare`
 */
export interface CloudPackage {
    /** xs:int */
    BandWidthQuantity?: number;
    /** BillingTypes|xs:string|TimeBased,OneTime,CalendarMonth,Monthly,TwoMonthly,ThreeMonthly,FourMonthly,HalfYearly,Yearly */
    BillingType?: string;
    /** xs:int */
    CpuQuantity?: number;
    /** Descriptions */
    Descriptions?: Descriptions;
    /** xs:int */
    Hdd0Quantity?: number;
    /** HypervisorTypes|xs:string|All,HyperV,VMWare,HyperVLowCost,SmartVMWare,OpenStackVPS,OpenStackVPSLowCost,OpenStackPro,OpenStackVPSSpecial */
    HypervisorType?: string;
    /** xs:string */
    IdentificationCode?: string;
    /** xs:boolean */
    IsLuckySmart?: boolean;
    /** MigratedFromEasyCloudPackageIDs */
    MigratedFromEasyCloudPackageIDs?: LoadBalancerContactsId;
    /** xs:int */
    PackageID?: number;
    /** xs:decimal */
    Price?: number;
    /** xs:int */
    ProductID?: number;
    /** xs:int */
    RAMQuantity?: number;
    /** TemplateTypes|xs:string|Windows,Linux,Custom */
    TemplateType?: string;
    /** UserOffer */
    UserOffer?: UserOffer;
}
