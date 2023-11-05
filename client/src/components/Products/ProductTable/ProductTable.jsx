import React, { useEffect, useState } from "react";
import "./productTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useSelector } from "react-redux";
import Spinner from "../../spinner/Spinner";
import Loader from "../../spinner/Spinner";

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

const ProductTable = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        "/api/v1/user/warehouse/get/all/products",
        config
      );
      // Assuming the response contains an array of data
      setTableData(response.data);
      console.log(response.data);
      setIsLoading(false); // Set loading state to false when the data is loaded
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response && error.response.status === 403) {
        // If the access token is expired or invalid, try refreshing it
        // refreshAccessToken();
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* {isLoading ? ( // Render a spinner while loading
        <div className="spinner-container">
          <Loader />
        </div>
      ) : (
        )} */}
      <DataGrid
        columns={columns.concat(actionColumn)}
        pageSize={12}
        rows={tableData}
        // rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default ProductTable;
