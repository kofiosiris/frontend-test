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
  Navigate,
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
import Products from "./pages/ProductPage/addNewProduct/Products";
import ViewProducts from "./pages/ProductPage/viewProducts/ViewProducts";
import AddShip from "./pages/shipments/AddShip/AddShip";
import Label from "./pages/shipments/ShippingLabel/Label";
import ViewShipment from "./pages/shipments/ViewShip/ViewShipment";
import ProductEmail from "./pages/ProductPage/ViewByEmail/ProductEmail";
import ViewCust from "./pages/customer/viewCustomers/ViewCust";
import CustRegister from "./pages/customer/register/CustRegister";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UnAuthorized from "./components/unAuthorized/UnAuthorized";
import RegisterCourier from "./pages/courier/register/RegisterCourier";
import ProfilePage from "./pages/warehouse/profilePage/ProfilePage";
import Customer from "./pages/customer/customerDash/Customer";
import Courier from "./pages/courier/courierDash/Courier";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
        <ProtectedRoute allowedRoles={["WAREHOUSE_CLERK"]}>
          <WareDash />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "warehouse/dash/products",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["WAREHOUSE_CLERK"]}>
          <Products />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "warehouse/dash/products/viewProducts",
    element: (
      <ProtectedRoute allowedRoles={["WAREHOUSE_CLERK"]}>
        <ViewProducts />
      </ProtectedRoute>
    ),
  },
  {
    path: "warehouse/dash/products/viewProducts/email",
    element: (
      <ProtectedRoute allowedRoles={["WAREHOUSE_CLERK"]}>
        <ProductEmail />
      </ProtectedRoute>
    ),
  },
  {
    path: "warehouse/dash/shipments",
    element: (
      <ProtectedRoute allowedRoles={["WAREHOUSE_CLERK"]}>
        <AddShip />
      </ProtectedRoute>
    ),
  },
  {
    path: "warehouse/dash/shipments/label",
    element: (
      <ProtectedRoute allowedRoles={["WAREHOUSE_CLERK"]}>
        <Label />
      </ProtectedRoute>
    ),
  },
  {
    path: "warehouse/dash/shipments/view",
    element: (
      <ProtectedRoute allowedRoles={["WAREHOUSE_CLERK"]}>
        <ViewShipment />
      </ProtectedRoute>
    ),
  },
  {
    path: "warehouse/dash/customers",
    element: (
      <ProtectedRoute allowedRoles={["WAREHOUSE_CLERK"]}>
        <ViewCust />
      </ProtectedRoute>
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
        <ProtectedRoute allowedRoles={["ADMIN"]}>
          <Admin />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "admin/users",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["ADMIN"]}>
          <List />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "admin/users/:id",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["ADMIN"]}>
          <Single />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "admin/users/new",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["ADMIN"]}>
          <New inputs={userInputs} title="Add New User" />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "admin/users/products/new",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["ADMIN"]}>
          <New inputs={productInputs} title="Add New Product" />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "customer/register",
    element: (
      <div>
        <CustRegister />
      </div>
    ),
  },
  {
    path: "courier/register",
    element: (
      <div>
        <RegisterCourier />
      </div>
    ),
  },
  {
    path: "/unauthorized",
    element: (
      <div>
        <UnAuthorized />
      </div>
    ),
  },
  {
    path: "/user/warehouse/profile",
    element: (
      <div>
        <ProfilePage />
      </div>
    ),
  },
  {
    path: "customer/dash",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["CUSTOMER"]}>
          <Customer />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "courier/dash",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["COURIER"]}>
          <Courier />
        </ProtectedRoute>
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
