import { setIsFetching, setTableLines, setErrorMessage } from './filesSlice';

import { backApiService } from '../../api';
import { getResponseError, normalizeData } from '../utils/store.utils';

export const getAllFiles = () => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
      const { data } = await backApiService.get('/files/data');
      const normalizedData = normalizeData(data);
      dispatch(setTableLines(normalizedData));
    } catch (err) {
      const errorMessage = getResponseError(err);
      dispatch(setErrorMessage(errorMessage ??''));

      setTimeout(() => {
        dispatch(setErrorMessage(''));
      }, 10);
    }
    dispatch(setIsFetching(false));
  };
};

export const findDataByFilename = (fileName) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
      const { data } = await backApiService.get(`/files/data?fileName=${fileName}`);
      const normalizedData = normalizeData(data);
      dispatch(setTableLines(normalizedData));
    } catch (err) {
      const errorMessage = getResponseError(err);
      dispatch(setErrorMessage(errorMessage ??''));

      setTimeout(() => {
        dispatch(setErrorMessage(''));
      }, 10);
    }
    dispatch(setIsFetching(false));
  };
};
