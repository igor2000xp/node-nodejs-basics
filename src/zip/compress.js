import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const  __dirname = path.dirname(__filename);
const INPUT_FILE_PATH = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const ZIPPED_FILE_PATH = path.resolve(__dirname, 'files', 'archive.gz');

export const compress = async () => {
    // Write your code here
  const myZip = zlib.createGzip();
  const inputStream = fs.createReadStream(INPUT_FILE_PATH);
  const outputStream = fs.createWriteStream(ZIPPED_FILE_PATH);

  inputStream.pipe(myZip).pipe(outputStream);
};

await compress();
