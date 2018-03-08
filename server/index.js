import express from 'express';
import { Nuxt, Builder } from 'nuxt';

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

if (isProd) app.set('trust proxy', 1); // trust first proxy
app.set('port', port);


// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !isProd;

// Init Nuxt.js
const nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log(`Server listening on ${host}:${port}`); // eslint-disable-line no-console