import React from "react";
import vennis from "./Vennis.png";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Instagram, Facebook, X, YouTube, Person } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import About from "../About/About";
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <MenuIcon />
        <img src={vennis} alt="Logo" />
        <h1>
          <NavLink to={"/"}>Vennis Resources</NavLink>
        </h1>
      </div>
      <div className="navbar-links">
        <div className="socials">
          <ul>
            <li>
              <NavLink href="https://www.instagram.com/toprockgemstones">
                <Instagram />
              </NavLink>
            </li>
            <li>
              <NavLink href="">
                <Facebook />
              </NavLink>
            </li>
            <li>
              <NavLink href="https://x.com/i/flow/login?redirect_after_login=%2FtoprockgemsZA">
                <X />
              </NavLink>
            </li>
            <li>
              <NavLink href="https://www.youtube.com/@TakudzwaNgaiso">
                <YouTube />
              </NavLink>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"./login"}>
              <Person />
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
