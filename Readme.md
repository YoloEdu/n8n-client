# n8n-client

Universal TypeScript client for n8n API.

Current n8n API Version: 1.1.1 (from n8n v1.84.1)

## Installation

From GitHub:
```bash
npm install YoloEdu/n8n-client
```

## Usage

```javascript
import n8nClient from '@yoloedu/n8n-client';

const users = await n8nClient.getUsers({
  baseUrl: 'http://n8n:5678/api/v1',
  headers: {
    'X-N8N-API-KEY': 'xxx'
  }
})

console.log(users.data)
```

## Development

This package was generated using:

```shell
npx @hey-api/openapi-ts \
    -i http://localhost:5678/api/v1/openapi.yml \
    -o src \
    -c @hey-api/client-fetch
```

To rebuild from the OpenAPI spec:
1. Update the OpenAPI URL if needed
2. Run the command above
3. Build with `npm run build`