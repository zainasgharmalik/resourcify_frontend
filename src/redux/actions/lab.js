import axios from "axios";
import { server } from "../store";

export const createLabResource = (formdata) => async (dispatch) => {
  dispatch({ type: "createLabResourceRequest" });

  try {
    const { data } = await axios.post(
      `${server}/create-lab-resource`,
      formdata,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }
    );

    dispatch({ type: "createLabResourceSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "createLabResourceFail",
      payload: error.response.data.message,
    });
  }
};

export const getLabResources = () => async (dispatch) => {
  dispatch({ type: "getLabResourcesRequest" });

  try {
    const { data } = await axios.get(
      `${server}/lab-resources`,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "getLabResourcesSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getLabResourcesFail",
      payload: error.response.data.message,
    });
  }
};

export const updateLabResource = (id, formdata) => async (dispatch) => {
  dispatch({ type: "updateLabResourceRequest" });

  try {
    const { data } = await axios.put(`${server}/lab-resource/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

    dispatch({ type: "updateLabResourceSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "updateLabResourceFail",
      payload: error.response.data.message,
    });
  }
};

export const getLabResourceById = (id) => async (dispatch) => {
  dispatch({ type: "getLabResourceByIdRequest" });

  try {
    const { data } = await axios.get(`${server}/lab-resource/${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    dispatch({ type: "getLabResourceByIdSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getLabResourceByIdFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteLabResource = (id) => async (dispatch) => {
  dispatch({ type: "deleteLabResourceRequest" });

  try {
    const { data } = await axios.delete(`${server}/lab-resource/${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    dispatch({ type: "deleteLabResourceSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteLabResourceFail",
      payload: error.response.data.message,
    });
  }
};
