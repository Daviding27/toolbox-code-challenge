import { filesSlice, setIsFetching, setTableLines, resetTableLines, setErrorMessage } from '../../../../src/store/files/filesSlice';

const { reducer } = filesSlice;

describe('filesSlice reducer', () => {
  const initialState = {
    tableLines: undefined,
    isFetching: false,
    errorMessage: '',
  };

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle setIsFetching action', () => {
    const newState = reducer(initialState, setIsFetching(true));
    expect(newState.isFetching).toBe(true);
  });

  test('should handle setTableLines action', () => {
    const tableLines = [{ id: 1, name: 'Line 1' }, { id: 2, name: 'Line 2' }];
    const newState = reducer(initialState, setTableLines(tableLines));
    expect(newState.tableLines).toEqual(tableLines);
  });

  test('should handle resetTableLines action', () => {
    const newState = reducer({ ...initialState, tableLines: [{ id: 1, name: 'Line 1' }] }, resetTableLines());
    expect(newState.tableLines).toEqual([]);
  });

  test('should handle setErrorMessage action', () => {
    const errorMessage = 'An error occurred';
    const newState = reducer(initialState, setErrorMessage(errorMessage));
    expect(newState.errorMessage).toBe(errorMessage);
  });
});
