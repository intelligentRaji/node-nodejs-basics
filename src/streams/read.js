import { createReadStream } from 'node:fs';
import { join } from 'node:path';

const { dirname } = import.meta;

const path = join(dirname, 'files', 'fileToRead.txt');

const read = (path) => {
  createReadStream(path).pipe(process.stdout);
};

read(path);
