import { createWriteStream } from 'node:fs';
import { join } from 'node:path';

const { dirname } = import.meta;

const path = join(dirname, 'files', 'fileToWrite.txt');

const write = () => {
  process.stdin.pipe(createWriteStream(path));
};

write();
