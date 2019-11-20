import React from "react";
import { Link } from "react-router-dom";
import navStyles from "./mainPageNav.module.scss";

export default () => (
  <div className={navStyles.navContainer}>
    <Link className={navStyles.navItem} to="/portfolio">
      Portfolio
    </Link>
    <Link className={navStyles.navItem} to="/contact">
      Contact me
    </Link>
  </div>
);
