import { createWriteStream } from 'fs';
import { join } from 'path';
import { FSError } from '../errors/fs-error.js';
import { isFileExists } from '../utils/is-file-exists.js';

const { dirname } = import.meta;

const create = async () => {
  const path = join(dirname, 'fresh.txt');

  if (!(await isFileExists(path))) {
    throw new FSError('I am fresh and young');
  }

  const writeStream = createWriteStream(path);

  writeStream.write('I am fresh and young');
};

await create();
