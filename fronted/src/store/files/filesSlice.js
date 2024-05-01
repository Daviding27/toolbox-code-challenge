import { createSlice } from '@reduxjs/toolkit';


const line={
    fileName: undefined,
    text : undefined,
    number:undefined,
    hex: undefined
  }

export const filesSlice = createSlice({
  name: 'files',
  initialState: {
    tableLines: undefined,
    isFetching: false,
    errorMessage: undefined,
  },
  reducers: {
    setTableLines: (state, { payload }) => {
      state.tableLines=payload;
    },
    resetTableLines: (state) => {
      state.tableLines = [];
    },
    setIsFetching: (state, { payload }) => {
      state.isFetching = payload;
    },

    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
  },
});

export const {
  setIsFetching,
  setTableLines,
  resetTableLines,
  setErrorMessage,
} = filesSlice.actions;
