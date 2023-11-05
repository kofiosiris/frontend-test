import React, { useState } from "react";
import "./addShip.scss";
import Sidebar from "../../../warehouseDash/sideBar/SideBar";
import Topbar from "../../../components/topbar/Topbar";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const AddShip = () => {
  const token = useSelector((state) => state.auth.user.accessToken);
  //   const { error } = useSelector((state) => state.products);

  const [shipmentData, setShipmentData] = useState({
    status: "",
    type: "",
    shipmentManifestFileName: null,
    airwayInvoiceFileName: null,
    departureDate: "",
    arrivalDate: "",
  });

  const uploadAirwayInvoiceFileUpload = async (
    shipmentId,
    airwayInvoiceFile
  ) => {
    const formData = new FormData();
    formData.append("file", airwayInvoiceFile);

    try {
      const response = await axios.put(
        `/api/v1/user/warehouse/${shipmentId}/upload/airway`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Set content type to multipart/form-data for file uploads
          },
        }
      );

      console.log("Airway invoice file uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading airway invoice file:", error);
    }
  };

  // Function to upload the shipment manifest file
  const uploadShipmentManifestFile = async (file, shipmentId) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      // Replace 'shipmentId' with the actual shipment ID in the URL
      await axios.put(
        `/api/v1/warehouse/${shipmentId}/upload/shipment/manifest`,
        formData,
        config
      );
    } catch (error) {
      console.error("Error uploading shipment manifest file: ", error);
    }
  };

  const handleAirwayInvoiceFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setShipmentData({
      ...shipmentData,
      airwayInvoiceFile: selectedFile,
    });
  };

  const handleShipmentManifestFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setShipmentData({
      ...shipmentData,
      shipmentManifestFile: selectedFile,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setShipmentData({
      ...shipmentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      // Step 1: Upload the airway invoice file
      if (shipmentData.airwayInvoiceFileName) {
        await uploadAirwayInvoiceFileUpload(shipmentData.airwayInvoiceFileName);
      }

      // Step 2: Upload the shipment manifest file
      if (shipmentData.shipmentManifestFileName) {
        await uploadShipmentManifestFile(
          shipmentData.shipmentManifestFileName
          //shipmentId  Replace 'shipmentId' with the actual shipment ID
        );
      }

      // Step 3: Create the shipment (excluding the file)
      const shipmentDataWithoutFile = { ...shipmentData };
      delete shipmentDataWithoutFile.airwayInvoiceFileName;
      delete shipmentDataWithoutFile.shipmentManifestFile;

      const response = await axios.post(
        "/api/v1/user/warehouse/create/shipment",
        shipmentDataWithoutFile,
        config
      );

      console.log("Shipment created successfully:", response.data);

      // Step 3: Clear the form fields
      setShipmentData({
        status: "",
        type: "",
        shipmentManifestFileName: null,
        airwayInvoiceFileName: null,
        departureDate: "",
        arrivalDate: "", // Reset the file input
      });
    } catch (error) {
      console.error("Error uploading airway invoice file:", error);
    }

    setShipmentData({
      status: "",
      type: "",
      shipmentManifestFileName: null,
      airwayInvoiceFileName: null,
      departureDate: "",
      arrivalDate: "",
    });
  };
  return (
    <div className="add_shipment">
      <Sidebar />
      <div className="addShip_container">
        <Topbar />
        <div className="top">
          <h1>Add New Shipment</h1>
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
                <label>Status</label>
                <input
                  type="text"
                  placeholder="Enter Status"
                  name="status"
                  value={shipmentData.status}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label>Type</label>
                <input
                  type="text"
                  placeholder="Enter Type"
                  name="type"
                  value={shipmentData.type}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label>Shipment Manifest File</label>
                <input
                  type="file"
                  placeholder="Enter Shipment Manifest File"
                  name="shipmentManifestFileName"
                  onChange={handleShipmentManifestFileUpload}
                />
              </div>
              <div className="formInput">
                <label>Airway Invoice File</label>
                <input
                  type="file"
                  placeholder="Enter Airway Invoice File"
                  name="airwayInvoiceFileName"
                  onChange={handleAirwayInvoiceFileUpload}
                  required
                />
              </div>
              <div className="formInput">
                <label>Departure Date</label>
                <input
                  type="text"
                  placeholder="Enter Departure Date"
                  name="departureDate"
                  value={shipmentData.departureDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label>Arrival Date</label>
                <input
                  type="text"
                  placeholder="Enter Arrival Date"
                  name="arrivalDate"
                  value={shipmentData.arrivalDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit">Send</button>
            </form>
            <Link to="label">
              <button className="label_button">Generate Shipping Label</button>
            </Link>
            <Link to="view">
              <button className="label_button">View All Shipments</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddShip;
