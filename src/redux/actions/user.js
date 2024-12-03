import axios from "axios";
import { server } from "../store";

export const login = (rollNo, password) => async (dispatch) => {
  dispatch({ type: "loginRequest" });

  try {
    const { data } = await axios.post(
      `${server}/login`,
      { rollNo, password },
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
  (name, email, role, password, country, timezone, phoneNumber) =>
  async (dispatch) => {
    dispatch({ type: "registerRequest" });

    try {
      const { data } = await axios.post(
        `${server}/register`,
        { name, email, role, password, country, timezone, phoneNumber },
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
