import { HttpsEndpoint } from "../ports/HttpsEndpoint";
import { BasicHttpsEndpoint } from "../ports/BasicHttpsEndpoint";

export interface WsEndUser {
    readonly HttpsEndpoint: HttpsEndpoint;
    readonly BasicHttpsEndpoint: BasicHttpsEndpoint;
}
