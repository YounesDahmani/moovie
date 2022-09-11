import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const handleClick = () => {
    console.log(toggleMenu);
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? "nav--black" : "nav--transparent"
      } ${toggleMenu && "show"}`}
    >
      <button className="nav__burger" onClick={handleClick}>
        <MenuIcon />
      </button>

      <NavLink to="/browse">
        <h2>
          <span className="blue">Moovie </span> App
        </h2>
      </NavLink>

      <nav className="nav__links">
        <ul>
          <NavLink
            to="/browse"
            className={({ isActive }) => (isActive ? "yeah" : "")}
          >
            <li className="nav__link">Accueil</li>
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) => (isActive ? "yeah" : "")}
          >
            <li className="nav__link">Séries</li>
          </NavLink>
          <NavLink
            to="/films"
            className={({ isActive }) => (isActive ? "yeah" : "")}
          >
            <li className="nav__link">Films</li>
          </NavLink>
          <NavLink
            to="/my-list"
            className={({ isActive }) => (isActive ? "yeah" : "")}
          >
            <li className="nav__link">Ma liste</li>
          </NavLink>
        </ul>
      </nav>
      <div className="nav__actions">
        <NavLink to="/search">
          <SearchIcon />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
