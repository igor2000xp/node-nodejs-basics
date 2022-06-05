import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = 'files';
const FILE_NAME = 'fileToRead.txt';
const ERROR_FS = 'FS operation failed';

export const read = async (pathFile) => {
    // Write your code here
  try {
    const readFile = await fs.readFile(pathFile, 'utf-8');
    console.log(readFile);
  } catch (e) {
    throw new Error(ERROR_FS);
  }
};

await read(path.resolve(__dirname, FILE_PATH, FILE_NAME));
