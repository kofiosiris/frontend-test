import React from "react";
import "./authHeader.css";
import { Link } from "react-router-dom";

function AuthHeader() {
  return (
    <div>
      {" "}
      <h3 className="auth__header">
        <Link to="/">Speedi Go</Link>
      </h3>
      <hr />
    </div>
  );
}

export default AuthHeader;
