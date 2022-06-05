import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH_FILE = 'files';
const NAME_FILE = 'fresh.txt';
const DATA_STRING = 'I am fresh and young';
const ERROR_MASSAGE = 'FS operation failed';

async function isFileExist(pathFile) {

  try {
    const checkAccess = await fs.access(pathFile);
    if (typeof checkAccess === 'undefined') {
      return true;
    }
  } catch {
  }
}

function errorExist(err) {
  throw new Error(err);
}

export const create = async (pathFile, data) => {
  // Write your code here

  try {
    const fileExist = await isFileExist(pathFile);
    if (fileExist) {
      errorExist(ERROR_MASSAGE);
    }
    return await fs.writeFile(pathFile, data);
  } catch(err) {
    throw new Error(err);
  }
}

await create(path.resolve(__dirname, PATH_FILE, NAME_FILE), DATA_STRING);
