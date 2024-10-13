import React from "react";
import Logo from "../assets/youtube.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-ox">
        <img src={Logo} alt="logo" className="logo-img" />
      </div>

      <div className="search-box">
        <input type="text" className="search-input" placeholder="search" />
        <button className="search-btn">Search</button>
      </div>
    </header>
  );
}
export default Header;
