import React, { useEffect } from "react";
import "./admin.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import Widget from "../components/widgets/Widget";
import Featured from "../components/featured/Featured";
import Chart from "../components/chart/Chart";
import List from "../components/table/Table";

const Admin = () => {
  return (
    <div className="dash_home">
      <Sidebar />
      <div className="dashContainer">
        <Topbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title={"Last 6 Months (Revenue)"} aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Admin;
