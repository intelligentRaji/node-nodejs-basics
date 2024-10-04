import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = (data) => {
  if (Math.random() > 0.5) {
    parentPort.postMessage(nthFibonacci(data));
    process.exit(0);
  }

  throw new Error();
};

sendResult(workerData);
