import { InternalServerError } from '../../core/index.js';
import FileRepository from '../repositories/files.repository.js';
import { filterValidLines, getListFileCsv, normalizeResponseData } from './utils/index.js';

export const getDataNormalizedCtrl = async (req, res, next) => {
  try {
    const { fileName } = req.query;
    const repository = new FileRepository();

    const listFilesName = fileName ? [fileName] : await repository.getListOfFiles();

    // Fetch the list of files from an external API
    const listFileCsv = await getListFileCsv(repository.downloadFile, listFilesName);

   // Filter lines, keeping only those with valid format
    const listFiltered = filterValidLines(listFileCsv);

    // Normalize response data
    const normalizedResponse = normalizeResponseData(listFiltered);
    res.status(200).json(normalizedResponse);
  } catch (err) {
    return next(new InternalServerError());
  }
};

export const getDataListCtrl = async (req, res, next) => {
  try {
    const repository = new FileRepository();
    // get List name from the external api
    const listFilesName = await repository.getListOfFiles();
    console.log('aqui real', listFilesName)
    if(!listFilesName) throw new Error()
    res.status(200).json(listFilesName);
  } catch (err) {
    console.log('estoy aqui')
    return next(new InternalServerError());
  }
};
