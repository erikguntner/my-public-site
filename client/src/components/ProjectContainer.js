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
        sliceChar={4}
        img="codesmith"
      />
      <Project color="#1de9b6" title="React Proto" sliceChar={5} img="proto" />
      <Project color="#0991d3" title="Run Tracker" sliceChar={4} img="run" />
      <Project color="orange" title="Avalon" sliceChar={3} img="avalon" />
      <Project color="#00afd7" title="Swell" id={5} sliceChar={2} img="swell" />
    </div>
  );
};

export default ProjectContainer;
