# Aruba Admin Examples

This directory contains practical examples demonstrating how to use the Aruba Admin library to interact with Aruba Cloud's SOAP API.

## Setup

Before running any examples, make sure you have:

1. **Installed dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the project root:
   ```env
   ARUBA_USERNAME=your_aruba_cloud_username
   ARUBA_PASSWORD=your_aruba_cloud_password
   ```

3. **Generated the SOAP API types:**
   ```bash
   npm run generateSoapApi
   ```

## Available Examples

### 📋 Basic Operations

#### 1. Get Servers List (`GetServersList.ts`)
Lists all virtual machines in your account.
```bash
npx ts-node examples/GetServersList.ts
```

#### 2. Get Account Credit (`GetAccountCredit.ts`)
Displays your current account credit and overdraft limit.
```bash
npx ts-node examples/GetAccountCredit.ts
```

### 🛠️ Advanced Operations

#### 3. Create Virtual Machine (`CreateVirtualMachine.ts`)
Creates a new virtual machine with specified configuration.
```bash
npx ts-node examples/CreateVirtualMachine.ts
```
**Note:** This will create an actual VM and may incur charges!

#### 4. Get Available Templates (`GetAvailableTemplates.ts`)
Lists available VM templates for VMware hypervisor.
```bash
npx ts-node examples/GetAvailableTemplates.ts
```

#### 5. Get Hypervisor Types (`GetHypervisorTypes.ts`)
Shows available hypervisor types and pre-configured packages.
```bash
npx ts-node examples/GetHypervisorTypes.ts
```

### 🌍 Multi-Region Examples

#### 6. Multi Data Center Example (`MultiDataCenterExample.ts`)
Demonstrates how to connect to multiple data centers and check servers across regions.
```bash
npx ts-node examples/MultiDataCenterExample.ts
```

### 🚨 Error Handling

#### 7. Error Handling Example (`ErrorHandlingExample.ts`)
Shows proper error handling techniques for API calls.
```bash
npx ts-node examples/ErrorHandlingExample.ts
```

## Example Output

### Get Servers List
```
GetServersAsync result: [
  {
    Name: "my-server-1",
    State: "Running",
    ...
  }
]
```

### Get Account Credit
```
Available Credit: 50.75
Overdraft Limit: 100.00
Full credit details: { Value: 50.75, OverdraftLimit: 100.00 }
```

### Multi Data Center
```
Checking servers across 5 data centers...

🌍 Connecting to Italy DC1 (https://api.dc1.computing.cloud.it/...)
✅ Italy DC1: Found 3 servers
   1. web-server-01 (Running)
   2. db-server-01 (Stopped)
   3. test-vm (Running)

🌍 Connecting to Czech Republic (https://api.dc3.computing.cloud.it/...)
✅ Czech Republic: Found 1 servers
   1. backup-server (Running)
```

## Basic Usage Pattern

All examples follow this basic pattern:

```typescript
import dotenv from "dotenv";
dotenv.config();

import { createArubaAdmin, DATA_CENTERS } from "../lib/index";

const username = process.env.ARUBA_USERNAME || "your_username";
const password = process.env.ARUBA_PASSWORD || "your_password";

(async () => {
    const client = await createArubaAdmin({
        username,
        password,
        dataCenter: DATA_CENTERS.ITALY1 // or any other data center
    });

    // Your API calls here
    const result = await client.SomeMethodAsync({...});
    
})().catch(console.error);
```

## Tips

1. **Start with basic examples** like `GetServersList.ts` to test your credentials
2. **Be careful with create operations** - they will create actual resources
3. **Check different data centers** to see where your resources are located
4. **Use error handling patterns** from the error handling example in your own code

## Troubleshooting

### Authentication Errors
- Verify your username and password in the `.env` file
- Ensure your account has API access enabled

### Network Errors
- Check your internet connection
- Some corporate firewalls may block SOAP requests

### API Errors
- Check the Aruba Cloud status page for service outages
- Verify you have sufficient credit for create operations

### Type Errors
- Run `npm run generateSoapApi` to ensure you have the latest type definitions
- Make sure TypeScript is properly configured

## Next Steps

After running these examples, you can:
- Modify them for your specific use cases
- Combine multiple operations in sequence
- Build automation scripts for your infrastructure
- Integrate with CI/CD pipelines

For more information, see the main [README.md](../README.md) file. 