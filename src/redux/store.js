import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { libraryReducer } from "./reducers/libraryReducer";

export const server = "http://localhost:4000/api/v1";

const store = configureStore({
  reducer: {
    user: userReducer,
    library: libraryReducer
  },
});

export default store;
