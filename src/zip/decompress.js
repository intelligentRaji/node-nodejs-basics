import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createUnzip } from 'node:zlib';

const { dirname } = import.meta;

const path = join(dirname, 'files', 'archive.gz');
const dest = join(dirname, 'files', 'fileToCompress.txt');

const decompress = async (path, dest) => {
  await pipeline(createReadStream(path), createUnzip(), createWriteStream(dest));
};

await decompress(path, dest);
