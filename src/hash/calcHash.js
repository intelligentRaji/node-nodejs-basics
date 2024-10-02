import { join } from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';

const { dirname } = import.meta;

const path = join(dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async (path) => {
  const read = createReadStream(path);
  const hash = createHash('sha256');

  await pipeline(read, hash);

  return hash.digest();
};

const hash = await calculateHash(path);
console.log(hash.toString('hex'));
