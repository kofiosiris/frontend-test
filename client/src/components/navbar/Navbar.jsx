import React, { useRef } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/JUNE-LOGO-2.jpg";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/#">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/login">
          <button className="login__btn">Login</button>
        </Link>
        <Link to="/track">
          <button className="track-btn">Track</button>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
