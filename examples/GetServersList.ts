import dotenv from "dotenv";
dotenv.config();

import { createArubaAdmin, DATA_CENTERS } from "../lib/index";

const username = process.env.ARUBA_USERNAME || "your_username";
const password = process.env.ARUBA_PASSWORD || "your_password";

(async () => {
   
    const client = await createArubaAdmin({
        username,
        password,
        dataCenter: DATA_CENTERS.CZECH
    });

    const context = await client.GetServersListAsync({ operationRequest: { LightData: true } });
    const result = context[0];

    if (result.GetServersListResult && result.GetServersListResult.Success) {
        console.log("GetServersAsync result:", result.GetServersListResult.Value);
    } 


})().catch(console.error);
