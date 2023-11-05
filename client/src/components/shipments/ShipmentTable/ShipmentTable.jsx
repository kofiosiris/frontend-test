import React, { useEffect, useState } from "react";
import "./shipmentTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "type", headerName: "Type", width: 150 },
  { field: "shipmentManifest", headerName: "Shipment Manifest", width: 160 },
  {
    field: "airwayInvoice",
    headerName: "Airway Invoice",
    width: 130,
  },
  { field: "departureDate", headerName: "Departure Date", width: 200 },
  { field: "arrivalDate", headerName: "Arrival Date", width: 130 },
];

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];

const ShipmentTable = () => {
  const [tableData, setTableData] = useState([]);
  const token = useSelector((state) => state.auth.user.accessToken);

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "/api/v1/user/warehouse/get/all/shipments",
        config
      );
      // Assuming the response contains an array of data
      setTableData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response && error.response.status === 403) {
        // If the access token is expired or invalid, try refreshing it
        // refreshAccessToken();
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <DataGrid
        columns={columns.concat(actionColumn)}
        pageSize={12}
        rows={tableData}
      />
    </div>
  );
};

export default ShipmentTable;
