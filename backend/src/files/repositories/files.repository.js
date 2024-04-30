import axios from 'axios';
import { allFilesPath, downloadFilePath } from './pathConstants.js';
import { apiKey, apiBaseUrl } from '../../../config/default.js';

class FileRepository {
  constructor() {}

  async getListOfFiles() {
    const response = await axios.get(`${apiBaseUrl}${allFilesPath}`, {
      headers: { Authorization: apiKey },
    });
    return response.data.files;
  }

  async downloadFile(fileName) {
    console.log(`${apiBaseUrl}${downloadFilePath(fileName)}`);

    const response = await axios.get(`${apiBaseUrl}${downloadFilePath(fileName)}`, {
      headers: { Authorization: apiKey },
    });
    console.log('----------------------------------');

    return response.data;
  }
}

export default FileRepository;
