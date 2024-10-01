import { join } from 'path';
import { rename as rn } from 'fs/promises';
import { isExists } from '../utils/is-exists.js';
import { FSError } from '../errors/fs-error.js';

const { dirname } = import.meta;

const oldPath = join(dirname, 'files', 'wrongFilename.txt');
const newPath = join(dirname, 'files', 'properFilename.md');

const rename = async (oldPath, newPath) => {
  if (await isExists(newPath)) {
    throw new FSError();
  }

  try {
    await rn(oldPath, newPath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new FSError(error);
    }
  }
};

await rename(oldPath, newPath);
