import { CustomError } from './error.js';

export class FSError extends CustomError {
  constructor(message) {
    super(message, 'FSError');
  }
}
