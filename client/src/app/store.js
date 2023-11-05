import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import messageReducer from "../features/message/message";

const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
    product: productReducer,
    devTools: true,
  },
});

export default store;
