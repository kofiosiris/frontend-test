import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./unAuthorized.scss";

const UnAuthorized = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="unauthorized_page">
      <h1>UnAuthorized</h1>
      <button className="logout_btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UnAuthorized;
