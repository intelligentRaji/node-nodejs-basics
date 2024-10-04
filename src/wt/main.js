import { cpus } from 'os';
import { join } from 'path';
import { isMainThread, Worker } from 'worker_threads';

const { dirname } = import.meta;

const workerPath = join(dirname, 'worker.js');

const performCalculations = () => {
  if (!isMainThread) {
    return;
  }

  const workers = Array.from(cpus()).map((_, index) => createWorker(index + 1));

  return Promise.allSettled(workers).then((results) => results.map(handleWorkerResult));
};

const createWorker = (number) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, { workerData: number });

    worker.on('message', (result) => {
      resolve(result);
    });

    worker.on('error', (error) => {
      reject(error);
    });

    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
};

const handleWorkerResult = (promise) => {
  return isPromiseFulfilled(promise) ? { status: 'resolved', data: promise.value } : { status: 'error', data: null };
};

const isPromiseFulfilled = (promiseData) => {
  return !!promiseData.value;
};

console.log(await performCalculations());
