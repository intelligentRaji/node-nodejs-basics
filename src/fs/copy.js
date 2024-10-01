import { copyFile, mkdir } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';
import { isExists } from '../utils/is-exists.js';
import { FSError } from '../errors/fs-error.js';
import { readDirectory } from '../utils/read-directory.js';

const { dirname } = import.meta;

const targetPath = join(dirname, 'files');
const destPath = join(dirname, 'files_copy');

export const copy = async (targetPath, destPath) => {
  if (await isExists(destPath)) {
    throw new FSError();
  }

  const files = await readDirectory(targetPath);

  for (const file of files) {
    if (file.isDirectory()) {
      copy(join(targetPath, file.name), join(destPath, file.name));
    }

    if (!file.isFile()) {
      return;
    }

    await mkdir(destPath, { recursive: true });
    await copyFile(join(targetPath, file.name), join(destPath, file.name), constants.COPYFILE_EXCL);
  }
};

await copy(targetPath, destPath);
