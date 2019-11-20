import React, { Fragment } from "react";
import styles from "./projectPageInfo.module.scss";

export default ({ project }) => {
  return (
    <Fragment>
      <div className={styles.details}>
        <h3>Overview</h3>
        {project.overview.map((sentence, index) => (
          <p key={index}>{sentence}</p>
        ))}
      </div>
      <div className={styles.stackInfo}>
        <div className={styles.frontend}>
          <h3>Front End stack</h3>
          {project.frontend.map(item => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className={styles.backend}>
          <h3>Back End stack</h3>
          {project.backend.map(item => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        <a href={`${project.url}`} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={`${project.github}`} target="_blank" rel="noopener noreferrer">
          Github Repo
        </a>
      </div>
    </Fragment>
  );
};
