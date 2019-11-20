import React from "react";
import PortfolioListItem from "../portfolioListItem";
import projects from "../../fixtures/projects";
import listStyles from "./portfolioList.module.scss";

const PortfolioList = () => (
  <div className={listStyles.list}>
    {projects.map(project => (
      <PortfolioListItem project={project} key={project.title} />
    ))}
  </div>
);

export default PortfolioList;
