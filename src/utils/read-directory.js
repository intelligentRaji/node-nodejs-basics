import { FSError } from '../errors/fs-error.js';
import { readdir } from 'fs/promises';

export const readDirectory = async (path) => {
  try {
    return await readdir(path, { recursive: true, withFileTypes: true });
  } catch (error) {
    throw new FSError();
  }
};
