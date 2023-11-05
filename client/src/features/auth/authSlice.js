// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/message";
import jwt_decode from "jwt-decode";

import AuthService from "../../components/services/auth.service";

export const register = createAsyncThunk(
  "auth/register",
  async (
    { firstname, lastname, email, role, phoneNumber, password },
    thunkAPI
  ) => {
    try {
      const userData = await AuthService.registerPartner(
        firstname,
        lastname,
        email,
        role,
        phoneNumber,
        password
      );

      return { user: userData, role };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerCustomer1 = createAsyncThunk(
  "auth/registerCustomer",
  async (
    {
      firstname,
      lastname,
      email,
      username,
      role,
      acceptedTermsAndConditions,
      phoneNumber,
      password,
    },
    thunkAPI
  ) => {
    try {
      const userData = await AuthService.registerCustomer(
        firstname,
        lastname,
        email,
        username,
        role,
        acceptedTermsAndConditions,
        phoneNumber,
        password
        // config
      );

      return { user: userData, role: role };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerCourier = createAsyncThunk(
  "auth/registerCustomer",
  async (
    {
      firstname,
      lastname,
      email,
      username,
      role,
      vehicleMake,
      vehicleModel,
      vehicleType,
      licensePlateNumber,
      acceptedTermsAndConditions,
      phoneNumber,
      password,
    },
    thunkAPI
  ) => {
    try {
      const userData = await AuthService.registerCourier1(
        firstname,
        lastname,
        email,
        username,
        role,
        vehicleMake,
        vehicleModel,
        vehicleType,
        licensePlateNumber,
        acceptedTermsAndConditions,
        phoneNumber,
        password
        // config
      );

      return { user: userData, role: role };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(email, password);

      const decodedToken = jwt_decode(data.accessToken);

      const userRole = decodedToken.role;

      // Save userRole to localStorage
      localStorage.setItem("userRole", JSON.stringify(userRole));
      console.log(userRole);

      return { user: data, role: decodedToken.role };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("accessToken"));
const token = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;
const userRole = localStorage.getItem("userRole")
  ? localStorage.getItem("userRole")
  : null;
const role = JSON.parse(userRole);
// const role = rolesArray[0].authority;

const initialState = {
  user: user ? user : null,
  role,
  token,
  isError: false,
  isAuthenticated: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      // state.isAuthenticated = false;
      state.message = "";
    },
    updateUserRole: (state, action) => {
      state.role = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.userRole = action.payload.role;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(registerCustomer1.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerCustomer1.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.userRole = action.payload.role;
      })
      .addCase(registerCustomer1.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.userRole = action.payload.role;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { userLoaded, reset, updateUserRole } = authSlice.actions;

export default authSlice.reducer;
