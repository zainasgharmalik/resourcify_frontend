import { createReducer } from "@reduxjs/toolkit";

export const libraryReducer = createReducer(
  {},
  {
    createLibraryItemRequest: (state) => {
      state.loading = true;
    },

    createLibraryItemSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    createLibraryItemFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getLibraryItemsRequest: (state) => {
      state.loading = true;
    },

    getLibraryItemsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload.libraryItems;
    },

    getLibraryItemsFail: (state, action) => {
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
