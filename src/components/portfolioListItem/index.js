import React from "react";
import { Link } from "react-router-dom";
import itemStyles from "./listItem.module.scss";

// 2 - GRID LAYOUT WITH IMG's
export default ({ project }) => (
  <Link className={itemStyles.projectLink} to={`/${project.title}`}>
    <div className={itemStyles.itemContainer}>
      <div className={itemStyles.imageContainer}>
        <img
          className={itemStyles.projectImage}
          src={project.imagePath}
          alt={project.title}
        />
      </div>
      <div className={itemStyles.summary}>
        <h3 className={itemStyles.heading}>{project.title}</h3>
        <p className={itemStyles.info}>{project.description}</p>
        {project.notes.map((note, index) => (
          <p className={itemStyles.info} key={index}>
            {note}
          </p>
        ))}
      </div>
    </div>
  </Link>
);

// 1 - ORIGINAL LAYOUT
// export default ({ project }) => (
//   <Link className={itemStyles.projectLink} to={`/${project.title}`}>
//     <div className={itemStyles.itemContainer}>
//       <div className={itemStyles.summary}>
//         <h3>{project.title}</h3>
//         <p>{project.description}</p>
//         { project.notes.map((note, index) => (
//           <p key={index}>{note}</p>
//         )) }
//       </div>
//       <div className={itemStyles.imageContainer}>
//         <img src={project.imagePath} alt={project.title} />
//       </div>
//     </div>
//   </Link>
// );
