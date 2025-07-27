// delete namespace https://api.computing.cloud.it/WsEndUser/json in wsdl
// that is not supported by soap library and breaks it

import { XMLParser } from "fast-xml-parser";
import fs from "fs/promises"
import path from "path";

const wsdllocation = path.resolve("./generatedSoapApi/Arubacloud.svc.wsdl");

(async ()  => {

    const wsdlContent = await fs.readFile(wsdllocation, "utf-8");
    const parser = new XMLParser();

})().catch(console.error);