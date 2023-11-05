import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { Provider, useSelector } from "react-redux";
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
import CustDash from "./pages/customer/customerDash/Customer";
import CourierDash from "./pages/courier/courierDash/Courier";
import ProductTable from "./components/Products/ProductTable/ProductTable";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/warehouse/register" element={<PartnerRegister />} />
          <Route path="/customer/register" element={<CustRegister />} />
          <Route
            path="/warehouse/dash"
            element={isAuthenticated ? <WareDash /> : <Navigate to="/login" />}
          />
          <Route
            path="/customer/dash"
            element={isAuthenticated ? <CustDash /> : <Navigate to="/login" />}
          >
            <Route path="/products" element={<ProductTable />} />
          </Route>
          <Route
            path="/courier/dash"
            element={
              isAuthenticated ? <CourierDash /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin"
            element={isAuthenticated ? <Admin /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
