import React from "react";
import Layout from "../layout";
import Carousel from "../carousel";
import ProjectInfo from '../projectPageInfo';
import { ontogeny } from "../../fixtures/projectsCarousel";
import { ontogeny as project } from '../../fixtures/projectPagesInfo';
import styles from "./ontogeny.module.scss";

export default () => {
  window.scrollTo(0,0);
  
  return (
    <Layout>
      <h2 className={styles.header}>Ontogeny App</h2>
      <Carousel project={ontogeny} />
      <ProjectInfo project={project} />
    </Layout>
  );
};
