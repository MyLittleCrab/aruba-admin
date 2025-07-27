
/**
 * OperationParameters
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface OperationParameters {
    /** ParameterType|xs:string|UpdateRamValue,UpdateCpuValue,RestartAfterExecuted */
    ParameterType?: string;
    /** xs:string */
    ParameterValue?: string;
}
