import React from "react";
import { NavLink } from "react-router-dom";
import header from "../../Assets/header.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="header container-fluid p-0">
        <div className="row justify-content-center m-0">
          <div className="col-8 col-sm-3">
          <img src={header} className="w-100" alt="" />
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <div className="" id="navbarNavDropdown">
            <ul className="navbar-nav flex-row flex-wrap justify-content-center">
              <li>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Home</NavLink>
              </li>
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/about">About Us</NavLink>
              </li>
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/gallery">Gallery</NavLink>
              </li>
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/clients">Clients</NavLink>
              </li>
              <li className="nav-item dropdown">
                <div
                    className="dropdown-toggle p-0"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to="/products"
                >Products</div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/products/pipes">Pipes</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/products/flanges">Flanges</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/products/valves">Valves</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/products/fittings">Pipe fittings</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/products/plates">Plates & Heads</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/products/studbolts">Studbolts & Gaskets</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/quality">Quality</NavLink>
              </li>
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/contacts">Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
