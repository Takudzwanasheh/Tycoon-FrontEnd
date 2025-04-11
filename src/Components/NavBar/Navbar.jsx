import React from "react";
import vennis from "./Vennis.png";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* <div><MenuIcon /></div> */}
      <div className="navbar-logo">
        <img src={vennis} alt="Logo" />
        <h1>Vennis Resources</h1>
      </div>
      <div className="navbar-links">
        <div className="socials">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
