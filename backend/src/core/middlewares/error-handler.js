import { CustomError } from '../errors/custom-error.js';

// Middleware function to handle errors globally in the Express application.
export const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).send({ errors: err.serializeErrors() });
  }
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
