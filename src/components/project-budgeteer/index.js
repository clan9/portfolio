import React from "react";
import Layout from "../layout";
import Carousel from "../carousel";
import ProjectInfo from "../projectPageInfo";
import { budgeteer } from "../../fixtures/projectsCarousel";
import { budgeteer as project } from "../../fixtures/projectPagesInfo";
import styles from "./budgeteer.module.scss";

export default () => {
  window.scrollTo(0,0);

  return (
    <Layout>
      <h2 className={styles.header}>Budgeteer App</h2>
      <Carousel project={budgeteer} />
      <ProjectInfo project={project} />
    </Layout>
  );
};
