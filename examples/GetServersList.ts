import dotenv from "dotenv";
dotenv.config();

import constants from "../lib/constants";
import ArubaAdmin from "../lib/ArubaAdmin";

const username = process.env.ARUBA_USERNAME || "your_username";
const password = process.env.ARUBA_PASSWORD || "your_password";

(async () => {
   
    const client = await ArubaAdmin({
        username,
        password,
        dataCenter: constants.DATA_CENTERS.CZECH
    });

    const context = await client.GetServersListAsync({ operationRequest: { LightData: true } });
    const result = context[0];

    if (result.GetServersListResult && result.GetServersListResult.Success) {
        console.log("GetServersAsync result:", result.GetServersListResult.Value);
    } 


})().catch(console.error);
