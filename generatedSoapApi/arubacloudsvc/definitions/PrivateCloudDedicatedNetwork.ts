import { PlannedChange } from "./PlannedChange";
import { ProductInfo } from "./ProductInfo";
import { BillingType } from "./BillingType";
import { Descriptions } from "./Descriptions";
import { AdditionalService } from "./AdditionalService";

/**
 * PrivateCloudDedicatedNetwork
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.PrivateCloud`
 */
export interface PrivateCloudDedicatedNetwork {
    /** PlannedChange */
    PlannedChange?: PlannedChange;
    /** ProductInfo */
    ProductInfo?: ProductInfo;
    /** xs:int */
    Quantity?: number;
    /** xs:int */
    ResourceID?: number;
    /** ResourceType */
    ResourceType?: BillingType;
    /** Status */
    Status?: BillingType;
    /** Descriptions */
    Descriptions?: Descriptions;
    /** xs:string */
    ProductFeatures?: string;
    /** xs:string */
    CAP?: string;
    /** xs:string */
    CognomeReferente?: string;
    /** xs:string */
    Comune?: string;
    /** xs:int */
    ConnectionTypeID?: number;
    /** xs:int */
    CountryID?: number;
    /** Firewall */
    Firewall?: AdditionalService;
    /** xs:string */
    Indirizzo?: string;
    /** xs:string */
    IndirizzoEmailPerAbusi?: string;
    /** xs:string */
    NomeReferente?: string;
    /** xs:string */
    NumeroDiFax?: string;
    /** xs:string */
    NumeroDiTelefono?: string;
    /** xs:string */
    Provincia?: string;
    /** xs:string */
    RagioneSociale?: string;
    /** xs:string */
    Subnet?: string;
}
