import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { animated, useSpring, config } from 'react-spring';
import Button from './Button';

import codesmith from '../assets/codesmith.png';
import proto from '../assets/proto.png';
import swell from '../assets/swell.png';
import avalon from '../assets/avalon.png';
import run from '../assets/run.png';

import styles from '../stylesheets/Project.module.scss';

const Project = ({ id, title, openId, color, onClick, sliceChar, img }) => {
  console.log(window.innerHeight);
  const [scrolled, setScrolled] = useState(false);
  const transform = useSpring({
    transform: scrolled ? 'translate3d(0, 0 ,0)' : 'translate3d(0, 100% ,0)',
  });

  const translate = useSpring({
    config: config.slow,
    opacity: scrolled ? 1 : 0,
    transform: scrolled ? 'translate3d(0, 0 ,0)' : 'translate3d(0, 100px ,0)',
  });

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
    avalon,
    run,
  };

  return (
    <div className={styles.project}>
      <div className={styles.projectContent}>
        <Waypoint
          bottomOffset={
            window.innerHeight > 900
              ? '20%'
              : window.innerHeight > 700
              ? '30%'
              : '40%'
          }
          onEnter={() => setScrolled(true)}
        />
        <div className={styles.projectDescription}>
          <h2 className={styles.projectTitle}>
            <animated.span style={transform}>{firstSplice}</animated.span>
            <animated.span style={transform}>{secondSplice}</animated.span>
          </h2>
          <animated.div style={translate} className={styles.projectLower}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              laudantium! Magni quidem eum nobis illo libero quis ratione
              accusamus.
            </p>
            <div
              className={styles.divider}
              style={{ backgroundColor: color }}
            />
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
          </animated.div>
        </div>
        <animated.div style={translate} className={styles.projectImage}>
          <img src={images[img]} alt="codesmith" />
        </animated.div>
      </div>
    </div>
  );
};

export default Project;
