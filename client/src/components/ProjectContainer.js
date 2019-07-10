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
        id={1}
        sliceChar={4}
        img={'codesmith'}
      />
      <Project
        color="#1de9b6"
        title="React Proto"
        id={2}
        sliceChar={5}
        img={'proto'}
      />
      <Project
        color="#0991d3"
        title="Run Tracker"
        id={3}
        sliceChar={4}
        img={'codesmith'}
      />
      <Project
        color="orange"
        title="Avalon"
        id={4}
        sliceChar={3}
        img={'codesmith'}
      />
      <Project
        color="#00afd7"
        title="Swell"
        id={5}
        sliceChar={2}
        img={'swell'}
      />
    </div>
  );
};

export default ProjectContainer;
