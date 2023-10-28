import React from "react";
import "./delivery.css";

function Delivery() {
  return (
    <div className="delivery__section">
      <div className="plane__container">
        <div className="plane__card">
          <img
            src="https://wallpaperaccess.com/full/254361.jpg"
            alt=""
            className="plane__img"
          />
          <h3 className="plane__title">Deliver By Air</h3>
          <p className="plane__desc">
            Customers have the option to Deliver their packages by air.
          </p>
          <button className="plane__button">Select</button>
        </div>
      </div>
      <div className="ship__container">
        <div className="ship__card">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/16/21/27/container-ship-6631117_1280.jpg"
            alt=""
            className="ship__img"
          />
          <h3 className="ship__title">Deliver By Sea</h3>
          <p className="ship__desc">
            Customers have the option to Deliver their packages by sea.
          </p>
          <button className="ship__button">Select</button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
