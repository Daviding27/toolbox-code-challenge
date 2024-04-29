import { app } from './app.js';

const start = async () => {
  const port = 3030;

  app.listen(port, () => {
    console.log('servidor corriendo en port ', port);
  });
};

start();
