import * as fs from 'fs';
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH_FILE_TO_WRITE = path.resolve(__dirname, 'files', 'fileToWrite.txt');

export const write = async () => {
    // Write your code here
  const myStreamToWrite = fs.createWriteStream(PATH_FILE_TO_WRITE);
  const readFromTerminal = process.stdin;

  readFromTerminal.pipe(myStreamToWrite);
};

await write();
