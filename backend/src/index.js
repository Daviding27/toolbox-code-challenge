import { port } from '../config/default.js';
import { app } from './app.js';

export const start = async () => {
  app.listen(port, () => {
    console.log('Server running on port ', port);
  });
};

start();
