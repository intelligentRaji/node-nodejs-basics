import { join } from 'path';
import { createReadStream } from 'fs';
import { FSError } from '../errors/fs-error.js';

const { dirname } = import.meta;

const path = join(dirname, 'files', 'fileToRead.txt');

const read = (path) => {
  return new Promise((resolve, reject) => {
    const readStream = createReadStream(path);

    let data = '';

    readStream.on('error', (error) => {
      if (error.code === 'ENOENT') {
        reject(new FSError(error));
      }
    });

    readStream.on('data', (chunk) => {
      data += chunk;
    });

    readStream.on('close', () => {
      resolve(data);
    });
  });
};

const data = await read(path);
console.log(data);
