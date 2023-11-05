import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "supplierName", headerName: "Supplier Name", width: 130 },
  { field: "customerNumber", headerName: "Customer Number", width: 150 },
  { field: "weight", headerName: "Weight", width: 130 },
  {
    field: "description",
    headerName: "Description",
    width: 130,
  },
  { field: "trackingNumber", headerName: "Tracking Number", width: 200 },
  { field: "shipmentType", headerName: "Shipment Type", width: 130 },
];

const ProdEmail = ({ email }) => {
  const [tableData, setTableData] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.token);

  const cleanedToken = token.replace(/^"(.*)"$/, "$1");

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cleanedToken}`,
        },
      };
      const response = await axios.get(
        `/api/v1/user/warehouse/get/products/by/email?email=${email}`,
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
      <DataGrid columns={columns} pageSize={12} rows={tableData} />
    </div>
  );
};

export default ProdEmail;
