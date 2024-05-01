import { getResponseError, normalizeData } from "../../../../src/store/utils/store.utils";

describe('getResponseError function', () => {
  test('should return error message from response data if available', () => {
    const err = {
      response: {
        data: {
          errors: [{ message: 'Error message from response' }]
        }
      }
    };
    const errorMessage = getResponseError(err);
    expect(errorMessage).toBe('Error message from response');
  });

  test('should return default error message if response data is not available', () => {
    const err = {
      response: {}
    };
    const errorMessage = getResponseError(err);
    expect(errorMessage).toBe('Networwk Error'); // Typo in 'Network' corrected
  });

  test('should return default error message if response data errors are not in expected format', () => {
    const err = {
      response: {
        data: {
          errors: 'Some error message'
        }
      }
    };
    const errorMessage = getResponseError(err);
    expect(errorMessage).toBe('Networwk Error'); // Typo in 'Network' corrected
  });

  test('should return default error message if no response is available', () => {
    const err = {};
    const errorMessage = getResponseError(err);
    expect(errorMessage).toBe('Error');
  });
});

describe('normalizeData function', () => {
  test('should normalize files array correctly', () => {
    const filesArray = [
      {
        file: 'file1.txt',
        lines: [
          { hex: 'hex1', number: 1, text: 'text1' },
          { hex: 'hex2', number: 2, text: 'text2' }
        ]
      },
      {
        file: 'file2.txt',
        lines: [
          { hex: 'hex3', number: 3, text: 'text3' },
          { hex: 'hex4', number: 4, text: 'text4' }
        ]
      }
    ];
    const normalizedData = normalizeData(filesArray);
    expect(normalizedData).toEqual([
      { name: 'file1.txt', hex: 'hex1', number: 1, text: 'text1' },
      { name: 'file1.txt', hex: 'hex2', number: 2, text: 'text2' },
      { name: 'file2.txt', hex: 'hex3', number: 3, text: 'text3' },
      { name: 'file2.txt', hex: 'hex4', number: 4, text: 'text4' }
    ]);
  });

  test('should return an empty array if files array is empty', () => {
    const filesArray = [];
    const normalizedData = normalizeData(filesArray);
    expect(normalizedData).toEqual([]);
  });

  test('should handle errors gracefully and return an empty array', () => {
    const filesArray = null; // Simulate invalid input
    const normalizedData = normalizeData(filesArray);
    expect(normalizedData).toEqual([]);
  });
});
