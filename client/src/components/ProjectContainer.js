import React, { useState } from 'react';
import Project from './Project';
import styles from '../stylesheets/ProjectContainer.module.scss';

const ProjectContainer = () => {
  // const [openId, setOpen] = useState(1);

  return (
    <div className={styles.container}>
      <Project
        color="#0F3181"
        title="Codesmith"
        site="https://www.codesmith.io/"
        id="codesmith"
      />
      <Project
        color="#1de9b6"
        github="https://github.com/React-Proto/react-proto"
        title="React Proto"
        id="proto"
      />
      <Project
        color="#0991d3"
        title="Run Tracker"
        site="https://pacific-crag-45485.herokuapp.com/"
        github="https://github.com/erikguntner/run-tracker"
        id="run"
      />
      <Project
        color="orange"
        title="Avalon"
        github="https://github.com/erikguntner/Avalon"
        id="avalon"
      />
      <Project
        color="#00afd7"
        title="Swell"
        id="swell"
        github="https://github.com/erikguntner/Swell"
      />
    </div>
  );
};

export default ProjectContainer;
