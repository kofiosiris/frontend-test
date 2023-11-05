import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.auth.user);
  const userRole = useSelector((state) => state.auth.role);
  const userRoleArray =
    typeof userRole === "string" ? JSON.parse(userRole) : userRole;
  const role = userRoleArray[0]?.authority;

  console.log("Extracted role: ", role);
  // if (roleExtract && roleExtract.length > 0) {
  //   role = roleExtract[0].authority;
  // }
  // const role = rolesArray[0].authority;
  // console.log("Extracted Role:", role);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && Array.isArray(allowedRoles) && allowedRoles.length > 0) {
    if (!userRoleArray) {
      return <Navigate to="/unAuthorized" />;
    }

    //Check if allowedRoles is an array and not empty

    if (!allowedRoles.includes(role)) {
      //User's role is not allowed, redirect to unauthorized page or handle as needed
      return <Navigate to="/unAuthorized" />;
    }
  }
  return children;
  //   return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
