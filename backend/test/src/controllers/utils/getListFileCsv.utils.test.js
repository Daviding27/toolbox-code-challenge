import { expect } from 'chai';
import sinon from 'sinon';
import { getListFileCsv } from '../../../../src/files/controllers/utils/index.js';

describe('getListFileCsv', () => {
  it('should return an array of CSV data for valid file names', async () => {
    // Mocking the downloadCsv function
    const downloadCsv = sinon.stub();
    downloadCsv.withArgs('file1.csv').resolves('csv data for file1');
    downloadCsv.withArgs('file2.csv').resolves('csv data for file2');

    // Test input
    const listNames = ['file1.csv', 'file2.csv'];

    // Call the function under test
    const result = await getListFileCsv(downloadCsv, listNames);

    // Assertions
    expect(result).to.be.an('array').that.includes('csv data for file1');
    expect(result).to.be.an('array').that.includes('csv data for file2');
    expect(result).to.have.lengthOf(2);
  });

  it('should handle errors and return an empty array for invalid file names', async () => {
    // Mocking the downloadCsv function
    const downloadCsv = sinon.stub();
    downloadCsv.withArgs('file1.csv').rejects(new Error('File not found'));

    // Test input
    const listNames = ['file1.csv', 'file2.csv'];

    // Call the function under test
    const result = await getListFileCsv(downloadCsv, listNames);
    console.log('result is ...',result)
    // Assertions
    expect(result).to.be.an('array').that.is.empty;
  });
});
