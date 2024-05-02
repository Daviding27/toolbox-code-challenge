import { expect } from 'chai';
import { filterValidLines } from '../../../../src/files/index.js';

describe('filterValidLines', () => {
  it('should return an empty array if listFileCsv is empty', () => {
    // Test input
    const listFileCsv = [];

    // Call the function under test
    const result = filterValidLines(listFileCsv);

    // Assertions
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should filter valid lines from listFileCsv', () => {
    // Test input
    const listFileCsv = [
      'file,text,number,hex\nexample.csv,valid,123,6066015b07371081491ba6973caacc19\nexample.csv,invalid,456,invalidhex\nexample.txt,valid,789,ghijkl',
      'file,text,number,hex\nexample.csv,valid2,123,6066015b07371081491ba6973caacc19\nexample.csv,invalid2,456,invalidhex\nexample.txt,valid2,789,ghijkl',
    ];

    // Call the function under test
    const result = filterValidLines(listFileCsv);

    // Assertions
    expect(result).to.have.lengthOf(2);
    expect(result[0]).to.deep.equal(['example.csv,valid,123,6066015b07371081491ba6973caacc19']);
    expect(result[1]).to.deep.equal(['example.csv,valid2,123,6066015b07371081491ba6973caacc19']);
  });

  it('should return an empty array if no valid lines are found', () => {
    // Test input
    const listFileCsv = ['file,text,number,hex\nexample.csv,invalid,456,invalidhex\nexample.txt,invalid,789,ghijkl'];

    // Call the function under test
    const result = filterValidLines(listFileCsv);

    // Assertions
    expect(result).to.be.an('array').that.is.empty;
  });
});
