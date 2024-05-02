import { createSlice } from '@reduxjs/toolkit';

export const filesSlice = createSlice({
  name: 'files',
  initialState: {
    tableLines: undefined,
    isFetching: false,
    errorMessage: '',
  },
  reducers: {
    setTableLines: (state, { payload }) => {
      state.tableLines = payload;
    },
    resetTableLines: (state) => {
      state.tableLines = [];
    },
    setIsFetching: (state, { payload }) => {
      state.isFetching = payload;
    },

    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload ?? '';
    },
  },
});

export const { setIsFetching, setTableLines, resetTableLines, setErrorMessage } = filesSlice.actions;
