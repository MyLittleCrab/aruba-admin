import { ServerStatuses } from "./ServerStatuses";

/**
 * operationRequest
 * @targetNSAlias `q119`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface OperationRequest {
    /** xs:boolean */
    LightData?: boolean;
    /** ServerStatuses */
    ServerStatuses?: ServerStatuses;
}
