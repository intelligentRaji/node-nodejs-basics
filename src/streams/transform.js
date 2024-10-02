import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

class ReverseStream extends Transform {
  _transform(chunk, encoding, done) {
    this.push(chunk.toString().split('').reverse().join(''));
    done();
  }
}

const transform = () => {
  stdin.pipe(new ReverseStream()).pipe(stdout);

  stdin.on('data', (message) => {
    process.stdout.write(`${message}\n`);
  });
};

transform();
