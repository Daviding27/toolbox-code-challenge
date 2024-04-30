import express from 'express';
import { getDataListCtrl, getDataNormalizedCtrl } from '../controllers/files.controller.js';

const filesRouter = express.Router();

filesRouter.get('/data', getDataNormalizedCtrl);
filesRouter.get('/data/list', getDataListCtrl);

export { filesRouter };
