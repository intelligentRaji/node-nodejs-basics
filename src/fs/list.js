import { join } from 'path';
import { readDirectory } from '../utils/read-directory.js';
import { stdout } from 'process';

const { dirname } = import.meta;

const path = join(dirname, 'files');

const list = async (path) => {
  const files = await readDirectory(path);

  for (const file of files) {
    stdout.write(`${file.name}\n`);
  }
};

await list(path);
