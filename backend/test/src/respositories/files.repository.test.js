import axios from 'axios';
import { expect } from 'chai';
import sinon from 'sinon';
import { FileRepository } from '../../../src/files/index.js';

describe('FileRepository', () => {
  describe('getListOfFiles', () => {
    it('should return list of files', async () => {
      // Mock data
      const files = [{ name: 'file1.csv' }, { name: 'file2.csv' }];
      const expectedResponse = { data: { files } };

      // Stubbing axios.get method to return the mock response
      const axiosGetStub = sinon.stub(axios, 'get').resolves(expectedResponse);

      // Creating a new instance of FileRepository
      const fileRepository = new FileRepository();

      // Calling the getListOfFiles method
      const result = await fileRepository.getListOfFiles();

      // Assertions
      expect(result).to.deep.equal(files);

      // Restoring the stubbed axios.get method
      axiosGetStub.restore();
    });
  });

  describe('downloadFile', () => {
    it('should download file', async () => {
      // Mock data
      const fileName = 'file1.txt';
      const fileData = 'File content';
      const expectedResponse = { data: fileData };

      // Stubbing axios.get method to return the mock response
      const axiosGetStub = sinon.stub(axios, 'get').resolves(expectedResponse);

      // Creating a new instance of FileRepository
      const fileRepository = new FileRepository();

      // Calling the downloadFile method
      const result = await fileRepository.downloadFile(fileName);

      // Assertions
      expect(result).to.equal(fileData);

      // Restoring the stubbed axios.get method
      axiosGetStub.restore();
    });
  });
});
