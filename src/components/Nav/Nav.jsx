import "./Nav.scss";
import React from "react";
import Logo from "../../assets/Logo/Logo-bandsite.svg";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="header">
      <div className="header__container">
        <img alt="logo" src={Logo} className="header__img" />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "header__list-item--active" : ""
                }
                to="/bio"
              >
                Biography
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "header__list-item--active" : ""
                }
                to="/shows"
              >
                Shows
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
