import dotenv from "dotenv";
dotenv.config();

import { createArubaAdmin, DATA_CENTERS } from "../lib/index";

const username = process.env.ARUBA_USERNAME || "your_username";
const password = process.env.ARUBA_PASSWORD || "your_password";

(async () => {
    
    try {
        const client = await createArubaAdmin({
            username,
            password,
            dataCenter: DATA_CENTERS.GERMANY
        });
        
        const result = await client.GetServersListAsync({
            operationRequest: { LightData: true }
        });
        
        if (!result[0].GetServersListResult?.Success) {
            console.error('API Error:', result[0].GetServersListResult?.ResultMessage);
            console.error('Error Code:', result[0].GetServersListResult?.ResultCode);
        } else {
            console.log('Success! Servers retrieved:', result[0].GetServersListResult.Value);
        }
        
    } catch (error) {
        console.error('Connection Error:', error);
        
        // More detailed error handling
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        
        // Handle specific error types
        if ((error as any).code === 'ENOTFOUND') {
            console.error('Network error: Unable to resolve hostname');
        } else if ((error as any).code === 'ECONNREFUSED') {
            console.error('Connection refused: Service may be down');
        } else if ((error as any).response) {
            console.error('HTTP Error:', (error as any).response.status, (error as any).response.statusText);
        }
    }

})().catch(console.error); 