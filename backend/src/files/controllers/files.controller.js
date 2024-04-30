import { InternalServerError } from '../../core/index.js';
import FileRepository from '../repositories/files.repository.js';
import { filterValidLines, getListFileCsv, normaliceResponseData } from './utils/index.js';

export const getDataNormaliced = async (req, res) => {
  try {
    const repository = new FileRepository();
    const listFilesName = await repository.getListOfFiles();
    const listFileCsv = await getListFileCsv(repository.downloadFile, listFilesName);
    const listFiltered =  filterValidLines(listFileCsv);
    const normalicedResponse =  normaliceResponseData(listFiltered);

    res.status(200).json(normalicedResponse);
  } catch (err) {
    console.log('err is ....', err);
    throw new InternalServerError(err + ', ');
  }
};
