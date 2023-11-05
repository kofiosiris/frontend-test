import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   // { field: "customerId", headerName: "Customer Id", width: 70 },
//   { field: "user.id", headerName: "Id", width: 130 },
//   { field: "username", headerName: "Username", width: 150 },
//   { field: "customerNumber", headerName: "Customer Number", width: 130 },
//   {
//     field: "profilePicture",
//     headerName: "Profile Pic",
//     width: 130,
//   },
//   { field: "firstName", headerName: "First Name", width: 200 },
//   { field: "lastName", headerName: "Shipment Type", width: 130 },
// ];

const CustTable = () => {
  const [tableData, setTableData] = useState([]);
  const token = useSelector((state) => state.auth.user.accessToken);
  const userRole = useSelector((state) => state.auth.role);
  const rolesArray = JSON.parse(userRole);
  const role = rolesArray[0].authority;

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get("/api/v1/user/customer/get/all", config);
      // Assuming the response contains an array of data
      setTableData(response.data);
      // const getRowId = (params) => params.data.customerNumber;
      console.log(response.data);
      console.log(role);
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
    // <div>

    /* <DataGrid
        columns={columns}
        getRowId={getR}
        rows={tableData}
        pageSize={12}
      /> */
    // </div>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Customer Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={row.user.id}>
            <th scope="row">{index + 1}</th>
            <td>{row.customerNumber}</td>
            <td>{row.user.firstName}</td>
            <td>{row.user.lastName}</td>
            <td>{row.user.phoneNumber}</td>
            <td>{row.user.emailAddress}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustTable;
