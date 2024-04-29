import { CustomError } from './custom-error.js';
class NotFoundError extends CustomError {
  constructor(data = '') {
    super('Route not found');
    this.status = 404;
    this.data = data;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors() {
    return [{ message: this.data + ' Not Found' }];
  }
}
const _NotFoundError = NotFoundError;
export { _NotFoundError as NotFoundError };
