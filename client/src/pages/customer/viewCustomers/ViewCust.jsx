import React from "react";
import "./viewCust.scss";
import Sidebar from "../../../warehouseDash/sideBar/SideBar";
import Topbar from "../../../components/topbar/Topbar";
import CustTable from "../../../components/customers/custTable/CustTable";

function ViewCust() {
  return (
    <div className="view_cust">
      <Sidebar />
      <div className="viewCust_container">
        <Topbar />
        <div className="top">
          <h2>View Customers</h2>
        </div>
        <div className="">
          <CustTable />
        </div>
        <br />
      </div>
    </div>
  );
}

export default ViewCust;
