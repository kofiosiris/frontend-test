import React, { useEffect, useState } from "react";
import "./userInfo.scss";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";

const UserInfo = () => {
  const token = useSelector((state) => state.auth.user.accessToken);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (token) {
      //Decode the JWT token
      const decodedToken = jwt_decode(token);

      console.log(decodedToken);
      console.log(decodedToken.role);

      //Make a GET request to fetch user data by email
      axios
        .get(`/api/v1/user/get/by/email?email=${decodedToken.userEmail}`)
        .then((response) => {
          const userDataFromApi = response.data;
          setUserData(userDataFromApi);
          console.log(userDataFromApi);
        })
        .catch((error) => {
          console.error("Error fetching user data: ", error);
        });
    }
  }, [token]);

  return (
    <div className="profileInfo">
      {/* <img src={userData.customer.profilePicture} alt="userPic" /> */}
      <label htmlFor="">
        First Name: {userData ? userData.customer.user.firstName : ""}
      </label>
      <label htmlFor="">
        Last Name: {userData ? userData.customer.user.lastName : ""}
      </label>
      <label htmlFor="">
        User Name: {userData ? userData.customer.username : ""}
      </label>
      <label htmlFor="">
        Phone Number: {userData ? userData.customer.phoneNumber : ""}
      </label>
      <label htmlFor="">
        Customer Number: {userData ? userData.customer.customerNumber : ""}
      </label>
      <label htmlFor="">
        Mailbox: {userData ? userData.customer.mailBox : ""}
      </label>
      <label htmlFor="">
        Role: {userData ? userData.customer.user.role : ""}
      </label>
      {/* <label htmlFor="">First Name: </label> */}
    </div>
  );
};

export default UserInfo;
