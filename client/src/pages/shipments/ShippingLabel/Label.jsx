import React, { useState } from "react";
import axios from "axios";
import "./label.scss";
import Sidebar from "../../../warehouseDash/sideBar/SideBar";
import Topbar from "../../../components/topbar/Topbar";
import { useSelector } from "react-redux";

const Label = () => {
  const [productId, setProductId] = useState("");
  const [label, setLabel] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.auth.user.accessToken);

  // const cleanedToken = token.replace(/^"(.*)"$/, "$1");

  const handleInputChange = (event) => {
    setProductId(event.target.value);
  };

  const fetchLabel = () => {
    setLoading(true);

    const apiUrl = `/api/v1/user/warehouse/generate/shipping/label?productId=${productId}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(apiUrl, config)
      .then((response) => {
        setLabel(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };
  return (
    <div className="add_label">
      <Sidebar />
      <div className="addLabel_container">
        <Topbar />
        <div className="top">
          <h1>Generate Shipping Label</h1>
        </div>
        <div className="labelData">
          <div className="productDetails">
            <label htmlFor="">Enter Product Id: </label>
            <input
              type="text"
              id="productIdInput"
              value={productId}
              onChange={handleInputChange}
              className="labelInput"
            />
          </div>
          <button onClick={fetchLabel} className="fetch_button">
            Fetch Label
          </button>
          <div className="labelInfo">
            <label htmlFor="">Customer Number: {label?.customerNumber}</label>
            <label htmlFor="">First Name: {label?.firstName}</label>
            <label htmlFor="">Last Name: {label?.lastName}</label>
            <label htmlFor="">Weight: {label?.weight}</label>
            <label htmlFor="">Description: {label?.description}</label>
            <label htmlFor="">June Address: {label?.juneAddress}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;
