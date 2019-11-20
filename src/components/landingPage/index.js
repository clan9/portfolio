import React from "react";
import landingStyles from "./landing.module.scss";
import MainPageNav from "../mainPageNav";
import Particles from '../particles';

export default () => {
  return (
    <div className={landingStyles.container}>
      <Particles />
      <div className={landingStyles.content}>
        <h1 className={landingStyles.header}>
          <span className={landingStyles.upper}>
            Hi, I'm <span className={landingStyles.name}>Simon Glennie</span>
          </span>
          <span className={landingStyles.lower}>
            I'm a full-stack web developer
          </span>
        </h1>
        <MainPageNav />
      </div>
    </div>
  );
};
