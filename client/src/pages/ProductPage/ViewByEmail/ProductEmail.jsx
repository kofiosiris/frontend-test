import React, { useState } from "react";
import Sidebar from "../../../warehouseDash/sideBar/SideBar";
import Topbar from "../../../components/topbar/Topbar";
import "./productEmail.scss";
import ProdEmail from "../../../components/Products/ProductEmailTable/ProdEmail";

const ProductEmail = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="product_email">
      <Sidebar />
      <div className="product_email_container">
        <Topbar />
        <div className="top">
          <h2>View Products via Email</h2>
          <div className="email_container">
            <label>Enter the email address: </label>
            <input type="text" value={email} onChange={handleEmailChange} />
            <button className="email_button">Send</button>
          </div>
        </div>
        <div className="">
          <ProdEmail email="carey12@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default ProductEmail;
