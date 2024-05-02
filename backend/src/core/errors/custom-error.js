// Base custom error class for creating custom error types in the application.

class CustomError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
const _CustomError = CustomError;
export { _CustomError as CustomError };
