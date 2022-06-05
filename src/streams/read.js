import * as fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.resolve(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
    // Write your code here
    const myReadStream = fs.createReadStream(FILE_PATH);
    const writableToTerminal = process.stdout;
    myReadStream.pipe(writableToTerminal);
};

await read();
