import { backApiService } from '../../../../src/api';
import { setErrorMessage, setTableLines } from '../../../../src/store/files/filesSlice';
import { findDataByFilename, getAllFiles } from '../../../../src/store/files/thunks';

jest.mock('../../../../src/api');

const data = [
  {
    file: 'test6.csv',
    lines: [
      {
        text: 'cVT',
        number: '99173084o',
        hex: '47419f20c8020d6c53159b725f25c6dd',
      },
    ],
  },
];

const normalizedData = [
  {
    name: 'test6.csv',
    text: 'cVT',
    number: '99173084o',
    hex: '47419f20c8020d6c53159b725f25c6dd',
  },
];

describe('filesThunks Tests', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  describe('getAllFiles Tests', () => {
    it('getAllFiles should use setTableLines with valid data', async () => {
      backApiService.get = jest.fn().mockResolvedValue({ data: data });
      await getAllFiles()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(setTableLines(normalizedData));
    });

    it('getAllFiles should dispatch setErrorMessage when API request fails', async () => {
      backApiService.get = jest.fn().mockRejectedValue(new Error('Request failed'));
      await getAllFiles()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(setErrorMessage(expect.anything()));
    });
  });

  describe('findDataByFilename Tests', () => {
    it('findDataByFilename should use setTableLines with valid data', async () => {
      backApiService.get = jest.fn().mockResolvedValue({ data: data });
      await findDataByFilename('test6.csv')(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(setTableLines(normalizedData));
    });

    it('findDataByFilename should dispatch setErrorMessage when API request fails', async () => {
      backApiService.get = jest.fn().mockRejectedValue(new Error('Request failed'));
      await findDataByFilename('test6.csv')(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(setErrorMessage(expect.anything()));
    });
  });
});
