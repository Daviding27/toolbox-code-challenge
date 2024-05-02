import { InternalServerError } from '../../core/index.js';
import FileRepository from '../repositories/files.repository.js';
import { filterValidLines, getListFileCsv, normalizeResponseData } from './utils/index.js';


// This controller to retrieve all the CSV-formatted data from the external API
// or only the file name CSV data if this was settend in the query param
export const getDataNormalizedCtrl = async (req, res, next) => {
  try {
    const { fileName } = req.query;
    const repository = new FileRepository();

    // Fetch the list of files names from external API
    // If the exist the fileName then set this fileName
    const listFilesName = fileName ? [fileName] : await repository.getListOfFiles();

    // Fetch the CSV data from each file name from external API
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
    // Fetch the list of files names from external API
    const listFilesName = await repository.getListOfFiles();
    res.status(200).json(listFilesName);
  } catch (err) {
    return next(new InternalServerError());
  }
};
