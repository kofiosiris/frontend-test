// authActions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLoaded } from "./authSlice";
import { useNavigate } from "react-router-dom";

const backendURL = "/api/v1/auth";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ firstname, lastname, email, phoneNumber, role, password }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "/api/v1/auth/register",
        { firstname, lastname, email, phoneNumber, role, password },
        config
      );

      // If registration is successful, you can return a response or just 'true'
      return true;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        throw error.response.data.message;
      } else {
        throw error.message;
      }
    }
  }
);

export const userLogin = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${backendURL}/authenticate`, {
      email,
      password,
    });

    // Assuming the response contains user data
    const userData = response.data.user;

    // Dispatch the userLoaded action to store the user data in your Redux store
    dispatch(userLoaded(userData));

    // Log the user data to the console
    console.log(userData);

    // Store the access token in local storage
    localStorage.setItem("accessToken", response.data.accessToken);
  } catch (error) {
    // Handle login error here
    console.error("Login error:", error);
    console.log(error.response.data);
    console.log(error.response.headers);
  }
};

export const logout = () => {
  localStorage.removeItem("userToken");
};

// actions.js
export const refreshToken = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/refresh_token");
    localStorage.setItem("token", data.token);
    dispatch(userLoaded(data.user));
  } catch (error) {
    dispatch(logout());
  }
};
