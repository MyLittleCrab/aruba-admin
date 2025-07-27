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
        dataCenter: constants.DATA_CENTERS.ITALY1
    });

    const creditResponse = await client.GetCreditAsync({});

    if (creditResponse[0].GetCreditResult && creditResponse[0].GetCreditResult.Success) {
        const credit = creditResponse[0].GetCreditResult.Value;
        console.log(`Available Credit: ${credit?.Value || 'N/A'}`);
        console.log(`Overdraft Limit: ${credit?.OverdraftLimit || 'N/A'}`);
        console.log("Full credit details:", credit);
    } else {
        console.error("Failed to get account credit:", creditResponse[0].GetCreditResult?.ResultMessage);
    }

})().catch(console.error); 