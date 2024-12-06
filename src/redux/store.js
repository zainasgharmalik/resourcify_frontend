import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { libraryReducer } from "./reducers/libraryReducer";
import { labReducer } from "./reducers/labReducer";

export const server = "http://localhost:4000/api/v1";

const store = configureStore({
  reducer: {
    user: userReducer,
    library: libraryReducer,
    lab: labReducer,
  },
});

export default store;
