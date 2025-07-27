import dotenv from "dotenv";
dotenv.config();

import { createClientAsync as ArubaClient } from "../generatedSoapApi/arubacloudsvc";
import { WSSecurity } from "soap";
import path from "path";

const username = process.env.ARUBA_USERNAME || "your_username";
const password = process.env.ARUBA_PASSWORD || "your_password";

(async () => {
    const client = await ArubaClient(path.resolve("./generatedSoapApi/Arubacloud.svc.wsdl"), {

    });

    client.setSecurity(new WSSecurity(username, password, {
        hasTimeStamp: true,
        hasNonce: true,
        passwordType: "PasswordText"
    }));

    // const servers = await client.GetServersAsync({});

    // const token = await client.GetUserAuthenticationTokenAsync({
    //     username,
    //     password,
    //     jsonp: "jsonpCallback",
    //     otpValue: undefined // Optional, can be undefined if not using OTP
    // });

const binding = client.wsdl.definitions.bindings;
console.log(Object.keys(binding)); // покажет все bindings

for (const [bindingName, bindingDef] of Object.entries(binding)) {
  console.log(`Binding: ${bindingName}`);
  console.log('Input', bindingDef.methods?.GetUserAuthenticationToken?.input);
}


    // console.log(client.describe());

})().catch(console.error);
