import React from "react";
import Layout from "../layout";
import Carousel from "../carousel";
import ProjectInfo from '../projectPageInfo';
import { headspace } from "../../fixtures/projectsCarousel";
import { headspace as project } from '../../fixtures/projectPagesInfo';
import styles from "./headspace.module.scss";

export default () => {
  window.scrollTo(0,0);
  
  return (
    <Layout>
      <h2 className={styles.header}>headSpace App</h2>
      <Carousel project={headspace} />
      <ProjectInfo project={project} />
    </Layout>
  );
};
