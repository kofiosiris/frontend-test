import React from "react";
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../warehouseDash/sideBar/SideBar";
import "./viewProducts.scss";
import ProductTable from "../../../components/Products/ProductTable/ProductTable";
import { DataGrid } from "@mui/x-data-grid";

const ViewProducts = () => {
  return (
    <div className="view_products">
      <Sidebar />
      <div className="view_container">
        <Topbar />
        <ProductTable />
      </div>
    </div>
  );
};

export default ViewProducts;
