import { VirtualDiskUpdate } from "./VirtualDiskUpdate";

/** SetEnqueueVirtualDiskManage */
export interface SetEnqueueVirtualDiskManage {
    /** xs:int */
    serverId?: number;
    /** disk */
    disk?: VirtualDiskUpdate;
}
