import React, { useState } from "react";
import "./product.scss";
import Sidebar from "../../../warehouseDash/sideBar/SideBar";
import Topbar from "../../../components/topbar/Topbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { addNewProduct } from "../../../features/product/productActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const token = useSelector((state) => state.auth.user.accessToken);

  // if (token !== undefined && token != null) {
  //   const cleanedToken = token.replace(/^"(.*)"$/, "$1");
  // } else {
  //   console.log("Token is not defined");
  // }
  const [productData, setProductData] = useState({
    supplierName: "",
    weight: "",
    description: "",
    customerEmail: "",
    trackingNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("/api/v1/user/warehouse/create/product", productData, config)
      .then((response) => {
        console.log("Response Data: ", response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });

    // Clear the form fields after submission
    setProductData({
      supplierName: "",
      weight: "",
      description: "",
      customerEmail: "",
      trackingNumber: "",
    });
  };

  return (
    <div className="new_products">
      <Sidebar />
      <div className="product_container">
        <Topbar />
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form action="" className="new_form" onSubmit={handleSubmit}>
              {/* <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div> */}
              <div className="formInput">
                <label>Supplier Name</label>
                <input
                  type="text"
                  placeholder="Enter Supplier Name"
                  name="supplierName"
                  value={productData.supplierName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label>Weight</label>
                <input
                  type="text"
                  placeholder="Enter Weight"
                  name="weight"
                  value={productData.weight}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Enter Description"
                  name="description"
                  value={productData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label>Customer Email</label>
                <input
                  type="text"
                  placeholder="Enter Valid Customer Email"
                  name="customerEmail"
                  value={productData.customerEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label>Tracking Number</label>
                <input
                  type="text"
                  placeholder="Enter Tracking Number"
                  name="trackingNumber"
                  value={productData.trackingNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit">Send</button>
            </form>
            <Link to="viewProducts">
              <button className="view_products">View Products</button>
            </Link>
            <Link to="viewProducts/email">
              <button className="view_email">View Products By Email</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  //   const { error } = useSelector((state) => state.products);
};

export default Products;
