import { expect } from 'chai';
import sinon from 'sinon';
import { FileRepository, getDataListCtrl, getDataNormalizedCtrl, normalizeResponseData } from '../../../src/files/index.js';
import { InternalServerError } from '../../../src/core/index.js';


describe('getDataNormalizedCtrl', () => {
    it('should return normalized response', async () => {
        // Mocking request, response, and next objects
        const req = { query: { fileName: 'example.txt' } };
        const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
        const next = sinon.spy();
    
        // Mocking fake data
        const fakeFileContent = 'line1\nline2\n';
        const fakeNormalizedData = [{ file: 'example.txt', lines: [{ text: 'line1', number: 'line2', hex: undefined }] }];
    
        // Stubbing FileRepository methods
        const repository = new FileRepository();
        sinon.stub(repository, 'getListOfFiles').resolves([]);
        sinon.stub(repository, 'downloadFile').resolves(fakeFileContent);
    
        // Stubbing normalizeResponseData method
        sinon.stub({ normalizeResponseData }, 'normalizeResponseData').returns(fakeNormalizedData);
    
        // Calling the controller function
        const pepe= await getDataNormalizedCtrl(req, res, next);
        console.log('pepe......',pepe,res.json)
    
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
