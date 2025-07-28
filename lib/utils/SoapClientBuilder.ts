import { downloadWSDLs, generateTypescriptApi } from "./Utils";
import { DataCenter, DATA_CENTERS } from "../constants";

(async ()  => {

    await generateTypescriptApi();

    // Download WSDLs for all data centers except the default one
    const dataCenters: DataCenter[] = 
        Object.values(DATA_CENTERS).filter(dc => dc.name !== DATA_CENTERS.DEFAULT.name);

    await downloadWSDLs(dataCenters);

})().catch(console.error);