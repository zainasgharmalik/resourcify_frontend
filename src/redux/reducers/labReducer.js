import { createReducer } from "@reduxjs/toolkit";

export const labReducer = createReducer(
  {},
  {
    createLabResourceRequest: (state) => {
      state.loading = true;
    },

    createLabResourceSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    createLabResourceFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getLabResourcesRequest: (state) => {
      state.loading = true;
    },

    getLabResourcesSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload.libraryItems;
    },

    getLabResourcesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },
  }
);
