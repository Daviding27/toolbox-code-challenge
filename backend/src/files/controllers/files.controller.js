import { InternalServerError } from '../../core/index.js';

export const getDataNormaliced = async (req, res) => {
  try {
    //1. llamar el listado de archivos.
    //2. Descarfar cada file
    //3. Retornar informacion formateada.

    res.status(200).json({ 'todo-bien': 'ok' });
  } catch (err) {
    const error = new InternalServerError(err + ', ');
    return next(error);
  }
};
