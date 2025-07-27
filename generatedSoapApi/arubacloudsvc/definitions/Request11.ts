
/**
 * request
 * @targetNSAlias `q29`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities.SmartVMWare`
 */
export interface Request11 {
    /** xs:string */
    AdministratorPassword?: string;
    /** xs:boolean */
    ConfigureIPv4ForVPSStarter?: boolean;
    /** xs:boolean */
    ConfigureIPv6?: boolean;
    /** xs:int */
    OSTemplateId?: number;
    /** xs:int */
    ServerId?: number;
    /** xs:string */
    SshKey?: string;
    /** xs:boolean */
    SshPasswordAuthAllowed?: boolean;
}
