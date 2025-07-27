import { DataCenter } from "./constants";
import { createClientAsync as ArubaClient } from "../generatedSoapApi/arubacloudsvc";
import { downloadWSDL } from "./utils/Utils";
import { WSSecurity } from "soap";

export type ArubaAdminOptions = {
    username: string;
    password: string;
    dataCenter: DataCenter;
}

export default async (options: ArubaAdminOptions) => {
    const client = await ArubaClient(await downloadWSDL(options.dataCenter));

    client.setSecurity(new WSSecurity(options.username, options.password, {
        hasTimeStamp: true,
        hasNonce: true,
        passwordType: "PasswordText"
    }));

    return client;
}
