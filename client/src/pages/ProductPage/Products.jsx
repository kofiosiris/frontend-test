import React from "react";
import "./product.scss";
import Sidebar from "../../warehouseDash/sideBar/SideBar";
import Topbar from "../../components/topbar/Topbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Products = () => {
  return (
    <div className="new_products">
      <Sidebar />
      <div className="product_container">
        <Topbar />
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form action="" className="new_form">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Product Name</label>
                <input type="text" placeholder="Enter Name" />
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
