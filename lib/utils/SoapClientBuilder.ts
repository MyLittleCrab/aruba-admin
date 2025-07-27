import { downloadWSDLs, generateTypescriptApi } from "./Utils";
import constants, { DataCenter } from "../constants";

(async ()  => {

    await generateTypescriptApi();

    // Download WSDLs for all data centers except the default one
    const dataCenters: DataCenter[] = 
        Object.values(constants.DATA_CENTERS).filter(dc => dc.name !== constants.DATA_CENTERS.DEFAULT.name);

    await downloadWSDLs(dataCenters);

})().catch(console.error);