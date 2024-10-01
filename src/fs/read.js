import { join } from 'path';
import { createReadStream } from 'fs';
import { stdout } from 'process';
import { FSError } from '../errors/fs-error.js';

const { dirname } = import.meta;

const path = join(dirname, 'files', 'fileToRead.txt');

const read = async (path) => {
  const readStream = createReadStream(path);

  readStream.on('error', (error) => {
    if (error.code === 'ENOENT') {
      throw new FSError(error);
    }
  });

  readStream.pipe(stdout);
};

await read(path);
