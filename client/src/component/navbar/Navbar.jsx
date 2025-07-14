import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";

const Navbar = () => {
  const [menu, setmenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setmenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => setmenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sing in</button>
      </div>
    </div>
  );
};

export default Navbar;
