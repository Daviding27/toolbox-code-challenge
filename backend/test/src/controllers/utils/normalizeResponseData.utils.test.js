import { expect } from 'chai';
import { normalizeResponseData } from '../../../../src/files/controllers/utils/index.js';

describe('normalizeResponseData', () => {
  it('should return the normalized response for valid input data', () => {
    // Define the input data set
    const inputData = [
      ['file1.csv,text1,1,hex1', 'file1.csv,text2,2,hex2'],
      ['file2.csv,text3,3,hex3', 'file2.csv,text4,4,hex4'],
    ];

    // Call the function under test
    const result = normalizeResponseData(inputData);

    // Define the expected output
    const expectedOutput = [
      {
        file: 'file1.csv',
        lines: [
          { text: 'text1', number: '1', hex: 'hex1' },
          { text: 'text2', number: '2', hex: 'hex2' },
        ],
      },
      {
        file: 'file2.csv',
        lines: [
          { text: 'text3', number: '3', hex: 'hex3' },
          { text: 'text4', number: '4', hex: 'hex4' },
        ],
      },
    ];

    // Verify that the result matches the expected output
    expect(result).to.deep.equal(expectedOutput);
  });
});
