import { Worker } from 'worker_threads';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as os from 'os';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WORKER_PATH = path.resolve(__dirname, 'worker');

// const myWorker = new Worker(WORKER_PATH, { workerData });

export const performCalculations = async () => {
    // Write your code here
  const myCpu = os.cpus().length;
  for (let i = 0; i < myCpu; i += 1) {
    const myWorkerData = 10 + i;
    await runService(myWorkerData);
  }
};

function runService(myWorkerData) {
  return new Promise((res, rej) => {
    const myWorker = new Worker(WORKER_PATH, { workerData: myWorkerData });
    myWorker.on('message', res)
  })
}

await performCalculations();
