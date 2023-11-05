import React from "react";
import "./customer.scss";
import Sidebar from "../../../components/customers/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";

const Customer = () => {
  return (
    <div className="customer_dash">
      <Sidebar />
      <div className="customer_container">
        <Topbar />
      </div>
    </div>
  );
};

export default Customer;
