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

export const getLibraryItemById = (id) => async (dispatch) => {
  dispatch({ type: "getLibraryItemByIdRequest" });

  try {
    const { data } = await axios.get(
      `${server}/library-item/${id}`,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "getLibraryItemByIdSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getLibraryItemByIdFail",
      payload: error.response.data.message,
    });
  }
};

export const updateLibraryItem = (id, formdata) => async (dispatch) => {
  dispatch({ type: "updateLibraryItemRequest" });

  try {
    const { data } = await axios.put(
      `${server}/library-item/${id}`,
      formdata,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "updateLibraryItemSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "updateLibraryItemFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteLibraryItem = (id) => async (dispatch) => {
  dispatch({ type: "deleteLibraryItemRequest" });

  try {
    const { data } = await axios.delete(
      `${server}/library-item/${id}`,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "deleteLibraryItemSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteLibraryItemFail",
      payload: error.response.data.message,
    });
  }
};
