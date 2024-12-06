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
