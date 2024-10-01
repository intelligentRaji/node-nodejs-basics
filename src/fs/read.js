import { join } from 'path';
import { read } from '../utils/read.js';

const { dirname } = import.meta;

const path = join(dirname, 'files', 'fileToRead.txt');

const data = await read(path);
console.log(data);
