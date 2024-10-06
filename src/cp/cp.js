import { fork } from 'node:child_process';
import { join } from 'node:path';

const { dirname } = import.meta;

const path = join(dirname, 'files', 'script.js');
const args = ['asd', 'qwe'];

const spawnChildProcess = (path, args) => {
  const child = fork(path, args, { silent: true });
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(path, args);
