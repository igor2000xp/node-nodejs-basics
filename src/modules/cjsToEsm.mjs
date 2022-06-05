import * as path from 'path';
import { release, version } from 'os';
import *  as http from 'http';
import { fileURLToPath } from 'url';
import * as module from 'module';

import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const JSON_A = path.resolve( __dirname, './files/a.json');
const JSON_B = path.resolve( __dirname, './files/b.json');

const require = module.createRequire(import.meta.url);
const dataA = require(JSON_A);
const dataB = require(JSON_B);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = dataA;
} else {
  unknownObject = dataB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = http.createServer((_, res) => {
    res.end('Request accepted');
});
