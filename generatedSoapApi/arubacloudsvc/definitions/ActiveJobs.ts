import { Job } from "./Job";

/**
 * ActiveJobs
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface ActiveJobs {
    /** Job[] */
    Job?: Array<Job>;
}
