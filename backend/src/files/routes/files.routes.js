import 'express-validator';
import express from 'express';
import { getDataNormaliced } from '../controllers/files.controller.js';

const filesRouter = express.Router();

filesRouter.get('/data', getDataNormaliced);

export { filesRouter };
