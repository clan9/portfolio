import React from "react";
import Layout from "../layout";
import Carousel from "../carousel";
import ProjectInfo from '../projectPageInfo';
import { adventours } from "../../fixtures/projectsCarousel";
import { adventours as project } from '../../fixtures/projectPagesInfo';
import styles from "./adventours.module.scss";

export default () => {
  window.scrollTo(0,0);

  return (
    <Layout>
      <h2 className={styles.header}>Scottish AdvenTours</h2>
      <Carousel project={adventours} />
      <ProjectInfo project={project} />
    </Layout>
  );
};
