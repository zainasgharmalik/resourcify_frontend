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

    updateLibraryItemRequest: (state) => {
      state.loading = true;
    },

    updateLibraryItemSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    updateLibraryItemFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getLibraryItemByIdRequest: (state) => {
      state.loading = true;
    },

    getLibraryItemByIdSuccess: (state, action) => {
      state.loading = false;
      state.item = action.payload.libraryItem;
    },

    getLibraryItemByIdFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteLibraryItemRequest: (state) => {
      state.loading = true;
    },

    deleteLibraryItemSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    deleteLibraryItemFail: (state, action) => {
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
