import axios from 'axios';
import { expect } from 'chai';
import sinon from 'sinon';
import { apiKey, apiBaseUrl } from '../../../config/default.js';
import { FileRepository, allFilesPath, downloadFilePath } from '../../../src/files/index.js';


describe('FileRepository', () => {
  describe('getListOfFiles', () => {
    it('should return list of files', async () => {
      const files = [{ name: 'file1.csv' }, { name: 'file2.csv' }];
      const expectedResponse = { data: { files } };
      const axiosGetStub = sinon.stub(axios, 'get').resolves(expectedResponse);
      const fileRepository = new FileRepository();
      const result = await fileRepository.getListOfFiles();

      expect(result).to.deep.equal(files);

      axiosGetStub.restore();
    });
  });

  describe('downloadFile', () => {
    it('should download file', async () => {
      const fileName = 'file1.txt';
      const fileData = 'File content';
      const expectedResponse = { data: fileData };
      const axiosGetStub = sinon.stub(axios, 'get').resolves(expectedResponse);

      const fileRepository = new FileRepository();
      const result = await fileRepository.downloadFile(fileName);

      expect(result).to.equal(fileData);
      
      axiosGetStub.restore();
    });
  });
});
