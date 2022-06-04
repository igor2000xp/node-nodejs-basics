import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const fileName = 'fileToRemove.txt';
const filePath = 'files';
const ERROR_MASSAGE = 'FS operation failed';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const remove = async (path) => {
    // Write your code here
  try {
    await fs.rm(path);
  } catch (err) {
    throw new Error(ERROR_MASSAGE);
  }

};

await remove(path.resolve(__dirname, filePath, fileName));
