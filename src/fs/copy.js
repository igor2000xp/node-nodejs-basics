import * as fs from 'fs/promises';
import { constants } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DESTINATION_PATH = path.resolve(__dirname, 'files_copy');
const SOURCE_PATH = path.resolve(__dirname, 'files');
const ERROR_FS = 'FS operation failed';

export const copy = async (sourcePath, destPath) => {
    // Write your code here
   try {
     const listFiles = await fs.readdir(sourcePath);
     const destinationPathFiles = path.resolve(__dirname, destPath);
     await fs.mkdir(destinationPathFiles);

     for (let i = 0; i < listFiles.length; i += 1) {
       await fs.copyFile(
         path.resolve(sourcePath, listFiles[i]),
         path.resolve(destinationPathFiles, listFiles[i]),
         constants.COPYFILE_EXCL
       );
     }
   } catch (err) {
     throw new Error(ERROR_FS);
   }
};

await copy(SOURCE_PATH, DESTINATION_PATH);
