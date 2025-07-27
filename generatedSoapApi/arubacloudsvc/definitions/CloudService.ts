
/**
 * CloudService
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface CloudService {
    /** ServiceStatuses|xs:string|NotEnabled,Enabled */
    ServiceStatus?: string;
    /** ServiceTypes|xs:string|All,Computing,Storage,Backup,SlaMonitoring,Dns,Domains,Balancers,Jelastic,DBaaS,BaasM365 */
    ServiceType?: string;
}
