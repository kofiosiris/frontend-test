//productActions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// Create an async thunk to add a new product
export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (
    { supplierName, weight, description, customerEmail, trackingNumber, token },
    { rejectWithValue }
  ) => {
    try {
      // const token = useSelector((state) => state.auth.token); // Assuming you store the token in the auth slice

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "/api/v1/user/warehouse/create/product",
        {
          supplierName,
          weight,
          description,
          customerEmail,
          trackingNumber,
        },
        config
      );

      console.log(
        supplierName,
        weight,
        description,
        customerEmail,
        trackingNumber
      );
      return response.data; // Assuming the server responds with the newly added product
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.log("Error: ", error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        console.log("Failed to add product: ", error);
        console.log(
          supplierName,
          weight,
          description,
          customerEmail,
          trackingNumber
        );
        return rejectWithValue("Failed to add a new product.");
      }
    }
  }
);

// Create an async thunk to fetch a product by Email
export const fetchProductByEmail = createAsyncThunk(
  "products/fetchProductByEmail",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `api/v1/user/warehouse/get/products/by/email${email}`
      );

      // Assuming the API returns the product data upon success
      return response.data;
    } catch (error) {
      // Handle the error and return a custom error message if needed
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Failed to fetch product details.");
      }
    }
  }
);
