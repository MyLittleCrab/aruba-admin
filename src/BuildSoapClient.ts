import xmlConverter from "xml-js";
import fs from "fs/promises"
import constants from "./constants";
import { parseAndGenerate } from "wsdl-tsclient";

(async ()  => {

    try{
        await fs.rm(constants.GENERATED_SOAP_API_DIR, { recursive: true });
    } catch (e) {
        if ((e as any).code !== 'ENOENT') {
            console.error(`Error removing directory ${constants.GENERATED_SOAP_API_DIR}:`, e);
            throw e; 
        }
    }
    
    await fs.mkdir(constants.GENERATED_SOAP_API_DIR);

    // Download WSDL file
    const wsdlUrl = constants.WSDL_URL;
    const res = await fetch(wsdlUrl);
    if (!res.ok) {
        throw new Error(`Failed to download WSDL from ${wsdlUrl}: ${res.statusText}`);
    }
    const wsdlContent = await res.text();

    // Update namespaces in WSDL
    const jsonObj = xmlConverter.xml2js(wsdlContent, { compact: false });

    const rootElement = jsonObj.elements[0]; // wsdl:definitions
    
    const rootArttributes = rootElement.attributes;
    for (const key in rootArttributes) {
        if (rootArttributes[key] === constants.BROKEN_NAMESPACE) {
            delete rootArttributes[key];
        }
    }

    rootElement.elements = rootElement.elements.filter((el: any) => {
        // filter out wsdl:import elements with the broken namespace
        return !(el.name === "wsdl:import" && el?.attributes?.namespace === constants.BROKEN_NAMESPACE)
    })

    const newWsdlContent = xmlConverter.js2xml(jsonObj, { compact: false, spaces: 2 });
    await fs.writeFile(constants.WSDL_LOCATION, newWsdlContent);

    // Generate TypeScript API from WSDL
    await parseAndGenerate(constants.WSDL_LOCATION, constants.GENERATED_SOAP_API_DIR, {
        caseInsensitiveNames: true,
        maxRecursiveDefinitionName: 1024
    });

})().catch(console.error);