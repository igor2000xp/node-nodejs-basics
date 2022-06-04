// const path = require('path');
// const { release, version } = require('os');
import * as path from 'path';
import { release, version } from 'os';
import *  as http from 'http';

// const { createServer: createServerHttp } = require('http');
// require('./files/c');

const __filename = path.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import './files/c.js';
import aJson from './files/a.json';
import bJson from './files/b.json'

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    // unknownObject = require('./files/a.json');
  unknownObject = aJson;
} else {
    // unknownObject = require('./files/b.json');
  unknownObject = bJson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

// const createMyServer = createServerHttp((_, res) => {
export const createMyServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

// module.exports = {
//     unknownObject,
//     createMyServer,
// };

