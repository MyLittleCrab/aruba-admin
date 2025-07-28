import dotenv from "dotenv";
dotenv.config();

import { createArubaAdmin, DATA_CENTERS } from "../lib/index";

const username = process.env.ARUBA_USERNAME || "your_username";
const password = process.env.ARUBA_PASSWORD || "your_password";

(async () => {
   
    // List of data centers to check
    const dataCenters = [
        DATA_CENTERS.ITALY1,
        DATA_CENTERS.ITALY2,
        DATA_CENTERS.CZECH,
        DATA_CENTERS.GERMANY,
        DATA_CENTERS.UK
    ];

    console.log(`Checking servers across ${dataCenters.length} data centers...\n`);

    for (const dataCenter of dataCenters) {
        try {
            console.log(`🌍 Connecting to ${dataCenter.name} (${dataCenter.url})`);
            
            const client = await createArubaAdmin({
                username,
                password,
                dataCenter
            });

            const result = await client.GetServersListAsync({
                operationRequest: { LightData: true }
            });

            if (result[0].GetServersListResult && result[0].GetServersListResult.Success) {
                const servers = result[0].GetServersListResult.Value;
                console.log(`✅ ${dataCenter.name}: Found ${Array.isArray(servers) ? servers.length : 0} servers`);
                
                if (Array.isArray(servers) && servers.length > 0) {
                    servers.forEach((server, index) => {
                        console.log(`   ${index + 1}. ${server.Name || 'Unnamed'} (${server.State || 'Unknown state'})`);
                    });
                }
            } else {
                console.log(`❌ ${dataCenter.name}: ${result[0].GetServersListResult?.ResultMessage || 'Unknown error'}`);
            }

        } catch (error) {
            console.error(`❌ ${dataCenter.name}: Connection failed -`, (error as Error).message);
        }
        
        console.log(''); // Empty line for readability
    }

})().catch(console.error); 