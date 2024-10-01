import { createReadStream } from 'fs';

export const read = (path) => {
  return new Promise((resolve, reject) => {
    const readStream = createReadStream(path);

    let data = '';

    readStream.on('error', (error) => {
      if (error.code === 'ENOENT') {
        reject(new FSError(error));
      }
    });

    readStream.on('data', (chunk) => {
      data += chunk;
    });

    readStream.on('close', () => {
      resolve(data);
    });
  });
};
