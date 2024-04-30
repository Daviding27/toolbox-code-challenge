import { port } from '../config/default.js';
import { app } from './app.js';

const start = async () => {
  app.listen(port, () => {
    console.log('servidor corriendo en port ', port);
  });
};

start();
