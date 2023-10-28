import React from "react";
import Sidebar from "./sideBar/SideBar";
import Topbar from "../components/topbar/Topbar";
import "./wareDash.scss";
import Widget from "../components/widgets/Widget";

const WareDash = () => {
  return (
    <div className="ware_home">
      <Sidebar />
      <div className="ware_container">
        <Topbar />
        <div className="ware_widgets">
          <Widget type="customer" className="ware_widget" />
          <Widget type="products" className="ware_widget" />
          <Widget type="balance" className="ware_widget" />
        </div>
      </div>
    </div>
  );
};

export default WareDash;
