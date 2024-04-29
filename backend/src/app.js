import 'express-validator';

import express, { json } from 'express';
import cors from 'cors';
import { NotFoundError, errorHandler } from './core/index.js';
import router from './routes.js';

//import fileUpload from 'express-fileupload';

const app = express();

//middlewares
app.use(cors());
app.use(json());
/*app.use(
  fileUpload({
    useTempFiles: true,
  })
);*/

//routes

app.use(router);
app.all('*', async (req, res, next) => {
  const err = new NotFoundError('Route ');
  next(err);
});

// Middleware errors
app.use(errorHandler);

export { app };
