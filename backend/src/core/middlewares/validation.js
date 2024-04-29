import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-errors';

const validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw (err = new RequestValidationError(errors.array()));
  }
  next();
};

export default {
  validation,
};
