import { sep } from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
await import('./files/c.js');

const getJSON = async (path) => {
  await import(path, { with: { type: 'json' } });
};

const { dirname, filename } = import.meta;

const path = Math.random() > 0.5 ? './files/a.json' : './files/b.json';

export const data = await getJSON(path);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

export const myServer = createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(data);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});
