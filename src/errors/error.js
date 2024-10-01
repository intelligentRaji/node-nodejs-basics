export class CustomError extends Error {
  constructor(err) {
    super(err.message);
    Object.assign(this, err);
  }
}
