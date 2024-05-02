import express from 'express';
import { getDataListCtrl, getDataNormalizedCtrl } from '../controllers/files.controller.js';

const filesRouter = express.Router();

// Route to retrieve the CSV-formatted data
filesRouter.get('/data', getDataNormalizedCtrl);

// Route to retrieve the list of file names
filesRouter.get('/data/list', getDataListCtrl);

export { filesRouter };
