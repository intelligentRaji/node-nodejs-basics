import { CustomError } from './error.js';

export class FSError extends CustomError {
  constructor(err = {}) {
    err.message = 'FS operation failed';
    super(err);
  }
}
