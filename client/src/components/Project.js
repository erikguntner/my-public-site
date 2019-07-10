import React from 'react';
import Button from './Button';

import codesmith from '../assets/codesmith.png';
import proto from '../assets/proto.png';
import swell from '../assets/swell.png';

import styles from '../stylesheets/Project.module.scss';

const Project = ({ id, title, openId, color, onClick, sliceChar, img }) => {
  const firstSplice = title.slice(0, sliceChar);
  const secondSplice = title.slice(sliceChar);

  const tech = [
    ['React', 'Redux', 'Node', 'Express'],
    ['CSS Modules', 'SASS', 'MongoDB'],
  ];

  const images = {
    codesmith,
    proto,
    swell,
  };

  const handleMouseEnter = () => {
    console.log('mouse entered');
  };

  const handleMouseExit = () => {
    console.log('mouse exit');
  };

  return (
    <div
      className={styles.project}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseExit()}
    >
      {/* <div className={styles.projectTitle} onClick={onClick}>
        <div>+</div>
        <h2>{title}</h2>
      </div> */}
      <div className={styles.projectContent}>
        <div className={styles.projectDescription}>
          <h2 className={styles.filledTitle}>
            <span>{firstSplice}</span>
            <span style={{ color: color }}>{secondSplice}</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            laudantium! Magni quidem eum nobis illo libero quis ratione
            accusamus.
          </p>
          <div className={styles.divider} style={{ backgroundColor: color }} />
          <h3>Technologies Used:</h3>
          <div className={styles.techList}>
            {tech.map((arr, i) => {
              return (
                <ul key={`list-${i}`}>
                  {arr.map((item, i) => {
                    return <li key={`item-${i}`}>- {item}</li>;
                  })}
                </ul>
              );
            })}
          </div>
          <ul />
          <div className={styles.btns}>
            <Button title="Visit Site" type="btn" />
            <Button title="Github" type="btn" />
          </div>
        </div>
        <div className={styles.projectImage}>
          <img src={images[img]} alt="codesmith" />
        </div>
      </div>
    </div>
  );
};

export default Project;
