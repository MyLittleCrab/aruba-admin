// Main exports
export { default, createArubaAdmin, ArubaAdminOptions, DataCenter, DataCenters } from './ArubaAdmin';

// Re-export useful types from generated API
export type { ArubacloudSvcClient } from '../generatedSoapApi/arubacloudsvc';

// Utility exports
export { downloadWSDL } from './utils/Utils'; 