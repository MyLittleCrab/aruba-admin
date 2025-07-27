import { Bandwidth } from "./Bandwidth";
import { Cpu2 } from "./Cpu2";
import { Io } from "./Io";
import { Net } from "./Net";

/**
 * Value
 * @targetNSAlias `q69`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Platform.Entities`
 */
export interface Value57 {
    /** BANDWIDTH */
    BANDWIDTH?: Bandwidth;
    /** CPU */
    CPU?: Cpu2;
    /** IO */
    IO?: Io;
    /** NET */
    NET?: Net;
    /** xs:string */
    VMUniqueName?: string;
    /** xs:int */
    VirtualMachineID?: number;
}
