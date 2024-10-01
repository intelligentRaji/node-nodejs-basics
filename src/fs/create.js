import { createWriteStream } from 'fs';
import { join } from 'path';
import { FSError } from '../errors/fs-error.js';
import { isFileExists } from '../utils/is-exists.js';

const { dirname } = import.meta;

const path = join(dirname, 'fresh.txt');

export const create = async (path) => {
  if (!(await isFileExists(path))) {
    throw new FSError();
  }

  const writeStream = createWriteStream(path);

  writeStream.write('I am fresh and young');
};

await create(path);
