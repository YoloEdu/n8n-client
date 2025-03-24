# n8n-client

Universal TypeScript client for n8n API.

## Installation

```bash
npm install n8n-client
# or
yarn add n8n-client
```

## Usage

```typescript
import { createClient } from 'n8n-client';

// Create a client instance
const client = createClient({
  baseUrl: 'https://your-n8n-instance.com/api/v1',
  headers: {
    'X-N8N-API-KEY': 'your-api-key-here'
  }
});

// Use the client
async function example() {
  const workflows = await client.workflows.getAll();
  console.log(workflows);
}
```

## Development

This package was generated using:

```shell
npx @hey-api/openapi-ts \
    -i https://docs.n8n.io/api/v1/openapi.yml \
    -o src \
    -c @hey-api/client-fetch
```

To rebuild from the OpenAPI spec:
1. Update the OpenAPI URL if needed
2. Run the command above
3. Build with `npm run build`