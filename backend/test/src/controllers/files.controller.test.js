import { expect } from 'chai';
import sinon from 'sinon';
import {
  FileRepository,
  filterValidLines,
  getDataListCtrl,
  getDataNormalizedCtrl,
  normalizeResponseData,
} from '../../../src/files/index.js';

describe('getDataNormalizedCtrl', () => {
  it('should return normalized response of all files', async () => {
    // Mocking request, response, and next objects
    const req = { query: { fileName: undefined } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const next = sinon.spy();

    // Mocking fake data
    const fakeFileContent = 'file,text,number,hex\test1A.csv,VMVMXutdEHH,674504994,c88a1bbc8276fdbe125a7b933d6becd3\n';
    const fakeNormalizedData = [
      {
        file: 'test1A.csv',
        lines: [{ text: 'VMVMXutdEHH', number: '674504994', hex: 'c88a1bbc8276fdbe125a7b933d6becd3' }],
      },
    ];

    // Stubbing FileRepository methods
    const repository = new FileRepository();
    sinon.stub(repository, 'getListOfFiles').resolves(['test1A.csv']);
    sinon.stub(repository, 'downloadFile').resolves([fakeFileContent]);

    // Stubbing normalizeResponseData method
    sinon.stub({ filterValidLines }, 'filterValidLines').returns(fakeNormalizedData);

    // Stubbing normalizeResponseData method
    sinon.stub({ normalizeResponseData }, 'normalizeResponseData').returns(fakeNormalizedData);

    // Calling the controller function
    await getDataNormalizedCtrl(req, res, next);

    // Expectations
    expect(res.status.calledWith(200)).to.be.true;
  });

  it('should return normalized response of a specific file name', async () => {
    // Mocking request, response, and next objects
    const req = { query: { fileName: 'test1A.csv' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const next = sinon.spy();

    // Mocking fake data
    const fakeFileContent = 'file,text,number,hex\test1A.csv,VMVMXutdEHH,674504994,c88a1bbc8276fdbe125a7b933d6becd3\n';
    const fakeNormalizedData = [
      {
        file: 'test1A.csv',
        lines: [{ text: 'VMVMXutdEHH', number: '674504994', hex: 'c88a1bbc8276fdbe125a7b933d6becd3' }],
      },
    ];

    // Stubbing FileRepository methods
    const repository = new FileRepository();
    sinon.stub(repository, 'getListOfFiles').resolves(['test1A.csv']);
    sinon.stub(repository, 'downloadFile').resolves([fakeFileContent]);

    // Stubbing normalizeResponseData method
    sinon.stub({ filterValidLines }, 'filterValidLines').returns(fakeNormalizedData);

    // Stubbing normalizeResponseData method
    sinon.stub({ normalizeResponseData }, 'normalizeResponseData').returns(fakeNormalizedData);

    // Calling the controller function
    await getDataNormalizedCtrl(req, res, next);
    // Expectations
    expect(res.status.calledWith(200)).to.be.true;
  });
});

describe('getDataListCtrl', () => {
  it('should return list of files', async () => {
    const req = {};
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const next = sinon.spy();

    const fakeListFiles = ['file1.txt', 'file2.txt'];

    const repository = new FileRepository();
    sinon.stub(repository, 'getListOfFiles').resolves(fakeListFiles);
    await getDataListCtrl(req, res, next);
    expect(res.status.calledWith(200)).to.be.true;
  });
});
