const { setConfig } = require('next/config');
const express = require('express');
const next = require('next');

setConfig(require('./next.config'));

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();

  const server = express();

  server.all('*', (req, res) => handle(req, res));

  await server.listen(port);

  console.log(`ready - started server on http://localhost:${port}`);
})();
