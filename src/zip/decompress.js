import * as fs from 'fs';
import * as path from "path";
import * as zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ZIPPED_FILE_PATH = path.resolve(__dirname, 'files', 'archive.gz');
const UNZIPPED_FILE_PATH = path.resolve(__dirname, 'files', 'fileToCompress.txt');


export const decompress = async () => {
    // Write your code here
  const myUnzip = zlib.createUnzip();
  const myInputStream = fs.createReadStream(ZIPPED_FILE_PATH);
  const myOutputStream = fs.createWriteStream(UNZIPPED_FILE_PATH);

  myInputStream.pipe(myUnzip).pipe(myOutputStream);
};

await decompress();
