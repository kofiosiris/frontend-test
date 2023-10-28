// authActions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const backendURL = "api/v1/auth";

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

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await axios.post(
        "/api/v1/auth/authenticate",
        { email, password },
        config
      );
      // store user's token in local storage
      localStorage.setItem("userToken", data.accessToken);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logOut = () => {
  localStorage.removeItem("userToken");
};
