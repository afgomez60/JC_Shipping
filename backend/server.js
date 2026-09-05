import { createServer } from 'node:http';

const port = process.env.PORT || 3001;

createServer((_request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({ service: 'JC Shipping API', status: 'ok' }));
}).listen(port, () => {
  console.log(`JC Shipping API running on port ${port}`);
});
