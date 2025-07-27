
import xmlConverter from "xml-js";
import fs from "fs/promises"
import constants, { DataCenter } from "../constants";

import { parseAndGenerate } from "wsdl-tsclient";
/**
 * Downloads the WSDL file for the specified data center and saves it to the generated SOAP API directory.
 * It also updates the namespaces in the WSDL to fix any broken references. 
 * @param dc Data center object containing URL and name
 * @return Promise<string> The path to the saved WSDL file
 * @throws Error if the WSDL download fails or if there is an issue writing the file
 */
export const downloadWSDL = async (dc: DataCenter): Promise<string> => {
    if (!dc || !dc.url || !dc.name) {
        throw new Error("Invalid data center object. It must contain 'url' and 'name' properties.");
    }

    const res = await fetch(dc.url);
    if (!res.ok) {
        throw new Error(`Failed to download WSDL from ${dc.url}: ${res.statusText}`);
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
    const path = `${constants.GENERATED_SOAP_API_DIR}/${dc.name}.wsdl`;
    await fs.writeFile(path, newWsdlContent);

    return path;
}

/**
 * Generates TypeScript API from the WSDL file located in the generated SOAP API directory.
 * It removes the existing generated SOAP API directory if it exists, creates a new one,
 * downloads the WSDL, and then generates the TypeScript API.
 * @returns {Promise<void>} A promise that resolves when the TypeScript API generation is complete.
 * @throws {Error} If there is an error removing the directory or generating the API.
 */
export const generateTypescriptApi = async (): Promise<void> => {

    try{
        await fs.rm(constants.GENERATED_SOAP_API_DIR, { recursive: true });
    } catch (e) {
        if ((e as any).code !== 'ENOENT') {
            console.error(`Error removing directory ${constants.GENERATED_SOAP_API_DIR}:`, e);
            throw e; 
        }
    }
    
    await fs.mkdir(constants.GENERATED_SOAP_API_DIR);

    await downloadWSDL(constants.DATA_CENTERS.DEFAULT);

    // Generate TypeScript API from WSDL
    await parseAndGenerate(constants.WSDL_LOCATION, constants.GENERATED_SOAP_API_DIR, {
        caseInsensitiveNames: true,
        maxRecursiveDefinitionName: 1024
    });

}

/**
 *  Downloads WSDL files for all specified data centers except the default one.
 * @param dataCenters Array of DataCenter objects to download WSDLs for
 * @returns {Promise<void>} A promise that resolves when all WSDLs are downloaded
 */
export const downloadWSDLs = async (dataCenters: DataCenter[]): Promise<void> => {
    console.log(`Downloading WSDLs for ${dataCenters.length} data centers...`);
    for (const dc of dataCenters) {
        await downloadWSDL(dc);
        console.log(`WSDL for ${dc.name} downloaded successfully.`);
    }
}
