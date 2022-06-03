import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { list } from './list.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DESTINATION_PATH = path.resolve(__dirname, 'files_copy');
const SOURCE_PATH = path.resolve(__dirname, 'files');
const ERROR_FS = 'FS operation failed';

export const copy = async (sourcePath, destPath) => {
    // Write your code here
   try {
     const listFiles = list(sourcePath);
     console.log(listFiles);

   } catch (err) {
     throw new Error(ERROR_FS);
   }

};

await copy(SOURCE_PATH, DESTINATION_PATH);
