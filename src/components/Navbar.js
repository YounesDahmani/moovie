import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-part">
        <div className="navbar-logo">
          <NavLink to="/browse">
            <p>Movie App</p>
          </NavLink>
        </div>
        <div className="header-menu">
          <ul>
            <NavLink
              to="/browse"
              className={({ isActive }) => (isActive ? "yeah" : "")}
            >
              <li>Accueil</li>
            </NavLink>
            <NavLink
              to="/series"
              className={({ isActive }) => (isActive ? "yeah" : "")}
            >
              <li>Séries</li>
            </NavLink>
            <NavLink
              to="/films"
              className={({ isActive }) => (isActive ? "yeah" : "")}
            >
              <li>Films</li>
            </NavLink>
            <NavLink
              to="/my-list"
              className={({ isActive }) => (isActive ? "yeah" : "")}
            >
              <li>Ma liste</li>
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="right-part">
        <div className="search">
          <span class="material-symbols-outlined">search</span>
        </div>
        <div className="user-icon">
          <span class="material-symbols-outlined">person</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
