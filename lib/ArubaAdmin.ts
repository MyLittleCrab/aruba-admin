import { DataCenter } from "./constants";
import { createClientAsync as ArubaClient } from "../generatedSoapApi/arubacloudsvc";
import { downloadWSDL } from "./utils/Utils";
import { WSSecurity } from "soap";

export type ArubaAdminOptions = {
    username: string;
    password: string;
    dataCenter: DataCenter;
}

export const createArubaAdmin = async (options: ArubaAdminOptions) => {
    const client = await ArubaClient(await downloadWSDL(options.dataCenter));

    client.setSecurity(new WSSecurity(options.username, options.password, {
        hasTimeStamp: true,
        hasNonce: true,
        passwordType: "PasswordText"
    }));

    return client;
}

// Default export for backward compatibility
export default createArubaAdmin;
