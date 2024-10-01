import { CustomError } from './error.js';

export class FSError extends CustomError {
  constructor() {
    super('FS operation failed', 'FSError');
  }
}
