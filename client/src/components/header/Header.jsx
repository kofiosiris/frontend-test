import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header__file">
      <div className="header__start">
        <img
          src="https://supremeworldwidedcs.com/wp-content/uploads/2022/03/4s.jpg"
          alt=""
        />

        <div className="header__card">
          <h1 className="header-card-title">
            Speedi-Go <br />
            Delivery
          </h1>
          <p className="header-card-desc">
            Speedi Go is your Go To Company when it comes to Quick and Effective
            Deliveries. Choose Whether you would like to get your packages
            delivered by Air or Sea.
          </p>
          <button className="header-btn">Schedule Your Next Delivery</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
