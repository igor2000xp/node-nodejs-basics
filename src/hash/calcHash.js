import { fileURLToPath } from "url";
import { dirname } from 'path';
import { createReadStream } from 'fs';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
const { createHash } = await import('crypto');
const hash = createHash('sha256');
const input = createReadStream(pathToFile);

export const calculateHash = async () => {
    // Write your code here
  input.on('readable', () => {
    const data = input.read();
    if (data)
      hash.update(data);
    else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();
