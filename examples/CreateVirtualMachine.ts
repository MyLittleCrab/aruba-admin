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

    const vmResponse = await client.CreateVirtualMachineAsync({
        operationRequest: {
            Name: "my-new-vm",
            CpuQuantity: 2,
            RamQuantity: 4096,
            OSTemplateId: 1, // Ubuntu template
            PackageId: 1
        }
    });

    console.log('VM Creation:', vmResponse[0]);

    if (vmResponse[0].CreateVirtualMachineResult && vmResponse[0].CreateVirtualMachineResult.Success) {
        console.log("Virtual Machine created successfully:", vmResponse[0].CreateVirtualMachineResult.Value);
    } else {
        console.error("Failed to create virtual machine:", vmResponse[0].CreateVirtualMachineResult?.ResultMessage);
    }

})().catch(console.error); 