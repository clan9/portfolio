import React from "react";
import Layout from "../layout";
import PortfolioList from "../portfolioList";
import portfolioStyles from "./portfolio.module.scss";

export default () => (
  <Layout>
    <div>
      <h2 className={portfolioStyles.heading}>Projects</h2>
      <PortfolioList />
    </div>
  </Layout>
);
