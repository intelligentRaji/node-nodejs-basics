import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const { dirname } = import.meta;

const path = join(dirname, 'files', 'fileToCompress.txt');
const dest = join(dirname, 'files', 'archive.gz');

const compress = async (path, dest) => {
  await pipeline(createReadStream(path), createGzip(), createWriteStream(dest));
};

await compress(path, dest);
