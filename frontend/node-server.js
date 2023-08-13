import dotenv from 'dotenv';
const { parsed, error } = dotenv.config({ /* path: '.env.server.local', */ debug: true });

console.log(dotenv.config());

// was there an error?
console.error(error);

// what was parsed?
console.log(parsed);

// compare to process.env
// console.dir(process.env);

import './build-node/index.js';
