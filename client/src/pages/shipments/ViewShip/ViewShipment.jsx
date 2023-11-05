import React from "react";
import Sidebar from "../../../warehouseDash/sideBar/SideBar";
import Topbar from "../../../components/topbar/Topbar";
import ShipmentTable from "../../../components/shipments/ShipmentTable/ShipmentTable";
import "./viewShipment.scss";

const ViewShipment = () => {
  return (
    <div className="view_shipments">
      <Sidebar />
      <div className="viewShip_container">
        <Topbar />
        <ShipmentTable />
      </div>
    </div>
  );
};

export default ViewShipment;
