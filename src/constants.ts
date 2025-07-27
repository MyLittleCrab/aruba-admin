export type DataCenter = {
    url: string;
    name: string;
};

export default {
    DATA_CENTERS: {
        DEFAULT: {
            url: "https://api.dc1.computing.cloud.it/WsEndUser/v2.9/WsEndUser.svc?wsdl",
            name: "Arubacloud.svc"
        } as DataCenter,
        ITALY1: {
            url: "https://api.dc1.computing.cloud.it/WsEndUser/v2.9/WsEndUser.svc?wsdl",
            name: "Italy 1"
        } as DataCenter,
        ITALY2: {
            url: "https://api.dc2.computing.cloud.it/WsEndUser/v2.9/WsEndUser.svc?wsdl",
            name: "Italy 2"
        } as DataCenter,
        CZECH: {
            url: "https://api.dc3.computing.cloud.it/WsEndUser/v2.9/WsEndUser.svc?wsdl",
            name: "Czech"
        } as DataCenter,
        FRANCE: {
            url: "https://api.dc4.computing.cloud.it/WsEndUser/v2.9/WsEndUser.svc?wsdl",
            name: "France"
        } as DataCenter,
        GERMANY: {
            url: "https://api.dc5.computing.cloud.it/WsEndUser/v2.9/WsEndUser.svc?wsdl",
            name: "Germany"
        } as DataCenter,
        UK: {
            url: "https://api.dc6.computing.cloud.it/WsEndUser/v2.9/WsEndUser.svc?wsdl",
            name: "UK"
        } as DataCenter,
        ITALY3: {
            url: "https://api.dc7.computing.cloud.it/WsEndUser/v2.9/WsEndUser.svc?wsdl",
            name: "Italy 3"
        } as DataCenter,
        POLAND: {
            url: "https://api.dc8.computing.cloud.it/WsEndUser/v2.9/WsEndUser.svc?wsdl",
            name: "Poland"
        } as DataCenter,
    },

    WSDL_LOCATION: "./generatedSoapApi/Arubacloud.svc.wsdl",
    BROKEN_NAMESPACE: "https://api.computing.cloud.it/WsEndUser/json",
    FIXED_NAMESPACE: "https://api.computing.cloud.it/WsEndUser",
    GENERATED_SOAP_API_DIR: "./generatedSoapApi",
    GENERATED_SOAP_API_FILE: "./generatedSoapApi/Arubacloud.svc.ts"
};