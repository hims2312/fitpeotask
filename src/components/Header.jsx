import React from "react";
import "../styles/Header.css";
import { FaBell, FaPlus, FaSearch } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            readOnly
          />
          <FaBell className="search-bell-icon" />
        </div>
      </div>

      <div className="header-right">
        <div className="user-profile">
          <img src={avatar} alt="User Avatar" className="avatar" />
        </div>
        <button className="add-button">
          <FaPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;
