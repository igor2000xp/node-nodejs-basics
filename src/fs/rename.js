import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path';
import { constants } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ERROR_FS = 'FS operation failed';
const subFolder = 'files';
const sourceFileName = 'wrongFilename.txt';
const destinationFileName = 'properFilename.md';
const fullSourceFileName = path.resolve(__dirname, subFolder, sourceFileName);
const fullDestinationFileName = path.resolve(__dirname, subFolder, destinationFileName);


export const rename = async () => {
    // Write your code here
  try {
    console.log(fullSourceFileName);
    console.log(fullDestinationFileName);
    await fs.copyFile(fullSourceFileName, fullDestinationFileName, constants.COPYFILE_EXCL);
    await fs.rm(fullSourceFileName);
  } catch (err) {
    throw new Error(ERROR_FS);
  }
};

await rename();
