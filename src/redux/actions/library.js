import axios from "axios";
import { server } from "../store";

export const createLibraryItem = (formdata) => async (dispatch) => {
  dispatch({ type: "createLibraryItemRequest" });

  try {
    const { data } = await axios.post(
      `${server}/create-library-item`,
      formdata,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }
    );

    dispatch({ type: "createLibraryItemSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "createLibraryItemFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllLibraryItems = () => async (dispatch) => {
  dispatch({ type: "getLibraryItemsRequest" });

  try {
    const { data } = await axios.get(
      `${server}/library-items`,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "getLibraryItemsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getLibraryItemsFail",
      payload: error.response.data.message,
    });
  }
};
