import * as fs from 'fs/promises';
import {fileURLToPath} from "url";
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH_FILES = 'files';
const ERROR_FS = 'FS operation failed';

export const list = async (path) => {
    // Write your code here
  try {
    const filesArr = await fs.readdir(path);
    console.log(filesArr);

  } catch (err) {
    throw new Error(ERROR_FS);
  }
};

await list(path.resolve(__dirname, PATH_FILES));
