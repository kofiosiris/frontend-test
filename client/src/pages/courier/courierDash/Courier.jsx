import React from "react";
import "./courier.scss";
import Sidebar from "../../../components/courier/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";

const Courier = () => {
  return (
    <div className="courier_dash">
      <Sidebar />
      <div className="courier_container">
        <Topbar />
      </div>
    </div>
  );
};

export default Courier;
