import React from "react";
import { NavLink } from "react-router-dom";
import navStyles from "./navbar.module.scss";

export default () => (
  <nav className={navStyles.navbar}>
    <div>
      <NavLink
        className={navStyles.navbarItem}
        activeClassName={navStyles.isActive}
        to="/"
        exact
      >
        Home
      </NavLink>
    </div>
    <div>
      <NavLink
        className={navStyles.navbarItem}
        activeClassName={navStyles.isActive}
        to="/portfolio"
        exact
      >
        Portfolio
      </NavLink>
      <NavLink
        className={navStyles.navbarItem}
        activeClassName={navStyles.isActive}
        to="/contact"
        exact
      >
        Contact me
      </NavLink>
    </div>
  </nav>
);
