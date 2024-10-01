import { join } from 'path';
import { unlink } from 'fs/promises';
import { FSError } from '../errors/fs-error.js';

const { dirname } = import.meta;

const path = join(dirname, 'files', 'fileToRemove.txt');

const remove = async (path) => {
  try {
    await unlink(path);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new FSError(error);
    }
  }
};

await remove(path);
