import React from "react";
import "./profilePage.scss";
import Sidebar from "../../../warehouseDash/sideBar/SideBar";
import Topbar from "../../../components/topbar/Topbar";
import UserInfo from "../../../components/userInfo/UserInfo";

const ProfilePage = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profile_container">
        <Topbar />
        <div className="top">
          <h2>Profile Details</h2>
        </div>
        <div className="userInfo">{/* <UserInfo /> */}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
