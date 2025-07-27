import { Descriptions } from "./Descriptions";

/**
 * UserOffer
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SmartVMWare`
 */
export interface UserOffer {
    /** Descriptions */
    Descriptions?: Descriptions;
    /** xs:int */
    Duration?: number;
    /** xs:dateTime */
    PeriodA?: Date;
    /** xs:dateTime */
    PeriodFrom?: Date;
    /** xs:decimal */
    Price?: number;
    /** xs:int */
    ProductId?: number;
}
