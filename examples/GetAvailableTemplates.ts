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

    const templatesResponse = await client.GetHypervisorTemplatesAsync({
        request: {
            VMMServerTypeID: 4 // VMware
        }
    });

    if (templatesResponse[0].GetHypervisorTemplatesResult && templatesResponse[0].GetHypervisorTemplatesResult.Success) {
        const templates = templatesResponse[0].GetHypervisorTemplatesResult.Value;
        console.log('Available Templates:', templates);
        
        // Display template details in a readable format
        if (templates && Array.isArray(templates)) {
            console.log(`\nFound ${templates.length} templates:`);
            templates.forEach((template, index) => {
                console.log(`${index + 1}. ${template.Name || 'Unnamed'} (ID: ${template.Id})`);
                if (template.Description) {
                    console.log(`   Description: ${template.Description}`);
                }
            });
        }
    } else {
        console.error("Failed to get templates:", templatesResponse[0].GetHypervisorTemplatesResult?.ResultMessage);
    }

})().catch(console.error); 