import axios from "axios";
import { server } from "../store";

export const login = (identifier, password) => async (dispatch) => {
  dispatch({ type: "loginRequest" });

  try {
    const { data } = await axios.post(
      `${server}/login`,
      { identifier, password },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

export const register =
  (name, rollNo, password, email, gender, role) => async (dispatch) => {
    dispatch({ type: "registerRequest" });

    try {
      const { data } = await axios.post(
        `${server}/register`,
        { name, rollNo, password, email, gender, role },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      dispatch({ type: "registerSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "registerFail", payload: error.response.data.message });
    }
  };

export const loadUser = () => async (dispatch) => {
  dispatch({ type: "loadUserRequest" });

  try {
    const { data } = await axios.get(`${server}/me`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "logoutRequest" });

  try {
    const { data } = await axios.get(`${server}/logout`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    dispatch({ type: "logoutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.message });
  }
};


export const getMyRequests = () => async (dispatch) => {
  dispatch({ type: "getMyRequestsRequest" });

  try {
    const { data } = await axios.get(`${server}/my-requests`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    dispatch({ type: "getMyRequestsSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getMyRequestsFail", payload: error.response.data.message });
  }
};