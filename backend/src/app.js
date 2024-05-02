import express, { json } from 'express';
import cors from 'cors';
import { NotFoundError, errorHandler } from './core/index.js';
import router from './routes.js';

const app = express();

//middlewares
app.use(cors());
app.use(json());

//routes
app.use(router);
app.all('*', async (req, res, next) => {
  const err = new NotFoundError('Route ');
  next(err);
});

// Middleware errors
app.use(errorHandler);

export { app };
