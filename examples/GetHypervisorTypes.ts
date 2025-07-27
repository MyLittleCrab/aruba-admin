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

    console.log("Getting available hypervisor types...\n");

    const hypervisorTypesResponse = await client.GetHypervisorTypesAsync({});

    if (hypervisorTypesResponse[0].GetHypervisorTypesResult && hypervisorTypesResponse[0].GetHypervisorTypesResult.Success) {
        const hypervisorTypes = hypervisorTypesResponse[0].GetHypervisorTypesResult.Value;
        console.log('Available Hypervisor Types:', hypervisorTypes);
        
        if (hypervisorTypes && Array.isArray(hypervisorTypes)) {
            console.log(`\nFound ${hypervisorTypes.length} hypervisor types:`);
            hypervisorTypes.forEach((type, index) => {
                console.log(`${index + 1}. ${type.Name || 'Unnamed'} (ID: ${type.Id})`);
                if (type.Description) {
                    console.log(`   Description: ${type.Description}`);
                }
            });
        }
    } else {
        console.error("Failed to get hypervisor types:", hypervisorTypesResponse[0].GetHypervisorTypesResult?.ResultMessage);
    }

    // Also get pre-configured packages
    console.log("\n" + "=".repeat(50));
    console.log("Getting pre-configured packages...\n");

    const packagesResponse = await client.GetPreConfiguredPackagesAsync({});

    if (packagesResponse[0].GetPreConfiguredPackagesResult && packagesResponse[0].GetPreConfiguredPackagesResult.Success) {
        const packages = packagesResponse[0].GetPreConfiguredPackagesResult.Value;
        console.log('Available Packages:', packages);
        
        if (packages && Array.isArray(packages)) {
            console.log(`\nFound ${packages.length} pre-configured packages:`);
            packages.forEach((pkg, index) => {
                console.log(`${index + 1}. ${pkg.Name || 'Unnamed'} (ID: ${pkg.Id})`);
                if (pkg.Description) {
                    console.log(`   Description: ${pkg.Description}`);
                }
                if (pkg.CpuQuantity && pkg.RamQuantity) {
                    console.log(`   Resources: ${pkg.CpuQuantity} CPU(s), ${pkg.RamQuantity} MB RAM`);
                }
            });
        }
    } else {
        console.error("Failed to get packages:", packagesResponse[0].GetPreConfiguredPackagesResult?.ResultMessage);
    }

})().catch(console.error); 