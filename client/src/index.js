import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home/Home";
import { MantineProvider } from "@mantine/core";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Register from "./pages/registration/Register";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import AuthFooter from "./components/authFooter/AuthFooter";
import Track from "./pages/track/Track";
import Admin from "./admin/Admin";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs, productInputs } from "./formSource";
import { Provider } from "react-redux";
import store from "./app/store";
import PartnerRegister from "./pages/warehouseAuth/register/PartnerRegister";
import WareDash from "./warehouseDash/WareDash";
import { ChakraProvider } from "@chakra-ui/react";
import Products from "./pages/ProductPage/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "register",
    element: (
      <div>
        <Register />
        <AuthFooter />
      </div>
    ),
  },
  {
    path: "login",
    element: (
      <div>
        <Login />
        <AuthFooter />
      </div>
    ),
  },
  {
    path: "warehouse/register",
    element: (
      <div>
        <PartnerRegister />
        <AuthFooter />
      </div>
    ),
  },
  {
    path: "warehouse/dash",
    element: (
      <div>
        <WareDash />
      </div>
    ),
  },
  {
    path: "warehouse/dash/products",
    element: (
      <div>
        <Products />
      </div>
    ),
  },
  {
    path: "track",
    element: (
      <div>
        <Navbar />
        <Track />
        <Footer />
      </div>
    ),
  },
  {
    path: "admin",
    element: (
      <div>
        <Admin />
      </div>
    ),
  },
  {
    path: "admin/users",
    element: (
      <div>
        <List />
      </div>
    ),
  },
  {
    path: "admin/users/:id",
    element: (
      <div>
        <Single />
      </div>
    ),
  },
  {
    path: "admin/users/new",
    element: (
      <div>
        <New inputs={userInputs} title="Add New User" />
      </div>
    ),
  },
  {
    path: "admin/users/products/new",
    element: (
      <div>
        <New inputs={productInputs} title="Add New Product" />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ChakraProvider>
  </Provider>
);
