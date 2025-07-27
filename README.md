# Aruba Admin

A TypeScript/Node.js library for interacting with Aruba Cloud's SOAP API. This library provides a fully typed interface to manage Aruba Cloud resources programmatically.

## Features

- 🚀 **Full TypeScript Support** - Auto-generated types from WSDL files
- 🌍 **Multi-Region Support** - Connect to multiple Aruba Cloud data centers
- 🔐 **Secure Authentication** - WS-Security implementation with username/password
- 📋 **Complete API Coverage** - Access to all Aruba Cloud SOAP API endpoints
- 🛠️ **Easy Setup** - Simple configuration and initialization
- 📖 **Rich Examples** - Comprehensive usage examples included

## Supported Data Centers

- 🇮🇹 **Italy DC1** - api.dc1.computing.cloud.it
- 🇮🇹 **Italy DC2** - api.dc2.computing.cloud.it  
- 🇮🇹 **Italy DC3** - api.dc7.computing.cloud.it
- 🇨🇿 **Czech Republic** - api.dc3.computing.cloud.it
- 🇫🇷 **France** - api.dc4.computing.cloud.it
- 🇩🇪 **Germany** - api.dc5.computing.cloud.it
- 🇬🇧 **United Kingdom** - api.dc6.computing.cloud.it
- 🇵🇱 **Poland** - api.dc8.computing.cloud.it

## Installation

```bash
npm install aruba-admin
```

## Prerequisites

- Node.js >= 12
- Aruba Cloud account with API access
- Valid username and password for Aruba Cloud

## Quick Start

### 1. Setup Environment Variables

Create a `.env` file in your project root:

```env
ARUBA_USERNAME=your_username
ARUBA_PASSWORD=your_password
```

### 2. Basic Usage

```typescript
import ArubaAdmin from 'aruba-admin';
import constants from 'aruba-admin/lib/constants';

const client = await ArubaAdmin({
    username: process.env.ARUBA_USERNAME!,
    password: process.env.ARUBA_PASSWORD!,
    dataCenter: constants.DATA_CENTERS.ITALY1
});

// Get list of servers
const result = await client.GetServersListAsync({ 
    operationRequest: { LightData: true } 
});

console.log(result[0].GetServersListResult?.Value);
```

## API Reference

### ArubaAdmin(options)

Creates an authenticated SOAP client for Aruba Cloud API.

#### Parameters

- `options` (ArubaAdminOptions): Configuration object
  - `username` (string): Your Aruba Cloud username
  - `password` (string): Your Aruba Cloud password  
  - `dataCenter` (DataCenter): Target data center

#### Returns

Promise<ArubaSoapClient> - Authenticated SOAP client with all API methods

### Data Centers

```typescript
import constants from 'aruba-admin/lib/constants';

// Available data centers
constants.DATA_CENTERS.ITALY1    // Italy DC1
constants.DATA_CENTERS.ITALY2    // Italy DC2  
constants.DATA_CENTERS.ITALY3    // Italy DC3
constants.DATA_CENTERS.CZECH     // Czech Republic
constants.DATA_CENTERS.FRANCE    // France
constants.DATA_CENTERS.GERMANY   // Germany
constants.DATA_CENTERS.UK        // United Kingdom
constants.DATA_CENTERS.POLAND    // Poland
constants.DATA_CENTERS.DEFAULT   // Default (Italy DC1)
```

## Examples

### Get Servers List

```typescript
import dotenv from 'dotenv';
import ArubaAdmin from 'aruba-admin';
import constants from 'aruba-admin/lib/constants';

dotenv.config();

const client = await ArubaAdmin({
    username: process.env.ARUBA_USERNAME!,
    password: process.env.ARUBA_PASSWORD!,
    dataCenter: constants.DATA_CENTERS.CZECH
});

const response = await client.GetServersListAsync({ 
    operationRequest: { LightData: true } 
});

if (response[0].GetServersListResult?.Success) {
    console.log('Servers:', response[0].GetServersListResult.Value);
} else {
    console.error('Failed to get servers list');
}
```

### Create Virtual Machine

```typescript
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
```

### Get Account Credit

```typescript
const creditResponse = await client.GetCreditAsync({});

if (creditResponse[0].GetCreditResult?.Success) {
    const credit = creditResponse[0].GetCreditResult.Value;
    console.log(`Available Credit: ${credit.Credit} ${credit.Currency}`);
}
```

### Get Available Templates

```typescript
const templatesResponse = await client.GetHypervisorTemplatesAsync({
    operationRequest: {
        HypervisorType: 4 // VMware
    }
});

if (templatesResponse[0].GetHypervisorTemplatesResult?.Success) {
    const templates = templatesResponse[0].GetHypervisorTemplatesResult.Value;
    console.log('Available Templates:', templates);
}
```

## Error Handling

```typescript
try {
    const client = await ArubaAdmin({
        username: process.env.ARUBA_USERNAME!,
        password: process.env.ARUBA_PASSWORD!,
        dataCenter: constants.DATA_CENTERS.GERMANY
    });
    
    const result = await client.GetServersListAsync({
        operationRequest: { LightData: true }
    });
    
    if (!result[0].GetServersListResult?.Success) {
        console.error('API Error:', result[0].GetServersListResult?.ResultMessage);
    }
    
} catch (error) {
    console.error('Connection Error:', error);
}
```

## Development

### Generate SOAP API Types

To regenerate TypeScript types from WSDL files:

```bash
npm run generateSoapApi
```

This will:
1. Download WSDL files from all supported data centers
2. Generate TypeScript interfaces and client code
3. Fix namespace issues in WSDL files

### Project Structure

```
aruba-admin/
├── lib/                     # Core library files
│   ├── ArubaAdmin.ts       # Main entry point
│   ├── constants.ts        # Data center configurations
│   └── utils/              # Utility functions
├── generatedSoapApi/       # Auto-generated SOAP client
├── examples/               # Usage examples
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the BSD-2-Clause License - see the [LICENSE](LICENSE) file for details.

## Author

**Roman A. Nosov** - [GitHub Profile](https://github.com/myLittleCrab)

## Disclaimer

This is an unofficial library for Aruba Cloud API. It is not affiliated with or endorsed by Aruba S.p.A.

## Support

- 📚 [Aruba Cloud Documentation](https://www.cloud.it/en/support-community/)
- 🐛 [Report Issues](https://github.com/myLittleCrab/arubaupdater/issues)
- 💬 [Discussions](https://github.com/myLittleCrab/arubaupdater/discussions)

---

**Keywords**: aruba, aruba-cloud, soap-api, typescript, cloud-management, virtual-machines, infrastructure
