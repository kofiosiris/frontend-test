import React from "react";
import HeaderMenu from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Delivery from "../../components/delivery/Delivery";
import "./home.css";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div className="home__page">
      <HeaderMenu />
      <Header />
      <Delivery />
    </div>
  );
}

export default Home;
