import { BoundsConfigurations } from "./BoundsConfigurations";
import { BillingType } from "./BillingType";
import { TypeConfiguration } from "./TypeConfiguration";

/**
 * VMMServerType
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.WsEndUser.Business.Entities`
 */
export interface VmmServerType1 {
    /** BoundsConfigurations */
    BoundsConfigurations?: BoundsConfigurations;
    /** xs:string */
    Description?: string;
    /** HypervisorServerType */
    HypervisorServerType?: BillingType;
    /** xs:int */
    ID?: number;
    /** TypeConfiguration */
    TypeConfiguration?: TypeConfiguration;
}
