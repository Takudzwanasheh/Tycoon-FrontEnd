import React, { useState } from "react";
import vennis from "./Vennis.png";
import "./navbar.scss";
import Menu from "../Menu/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Instagram, Facebook, X, YouTube, Person } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <MenuIcon className="menuIcon" onClick={() => setMenuOpen(!menuOpen)} />
        <img src={vennis} alt="Logo" />
        <h1>
          <NavLink to="/">Vennis Resources</NavLink>
        </h1>
      </div>
      <div className="navbar-links">
        <div className="socials">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/toprockgemstones"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2FtoprockgemsZA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/results?search_query=toprock+gemstones"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube />
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <Person />
            </NavLink>
          </li>
        </ul>
      </div>
      {menuOpen && <Menu className="menu" />}
    </header>
  );
}
