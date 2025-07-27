import dotenv from "dotenv";
dotenv.config();

import { createClientAsync as ArubaClient } from "../generatedSoapApi/arubacloudsvc";
import { WSSecurity } from "soap";
import constants from "./constants";
import { downloadWSDL } from "./utils/Utils";

const username = process.env.ARUBA_USERNAME || "your_username";
const password = process.env.ARUBA_PASSWORD || "your_password";

(async () => {
    const client = await ArubaClient(await downloadWSDL(constants.DATA_CENTERS.CZECH));

    client.setSecurity(new WSSecurity(username, password, {
        hasTimeStamp: true,
        hasNonce: true,
        passwordType: "PasswordText"
    }));

    const context = await client.GetServersListAsync({ operationRequest: { LightData: true } });
    const result = context[0];

    // console.log(result);

    if (result.GetServersListResult && result.GetServersListResult.Success) {
        console.log("GetServersAsync result:", result.GetServersListResult.Value);
    } 


})().catch(console.error);
