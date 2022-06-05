import { Worker }  from 'worker_threads';

let result;
// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
  const status = typeof result !== 'undefined' ? 'resolved' : 'error';
  Worker.parentPort.postMessage({status: status, data: result})
};

function runCount() {
  result = nthFibonacci(Worker.workerData);
  sendResult()
}

runCount();
