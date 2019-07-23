import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { animated, useSpring, config } from 'react-spring';
import projects from '../projects';

import styles from '../stylesheets/Project.module.scss';

const Project = ({ title, color, id, site, github }) => {
  const [scrolled, setScrolled] = useState(false);
  const transform = useSpring({
    transform: scrolled ? 'translate3d(0, 0 ,0)' : 'translate3d(0, 100% ,0)',
  });

  const translate = useSpring({
    config: config.slow,
    opacity: scrolled ? 1 : 0,
    transform: scrolled ? 'translate3d(0, 0 ,0)' : 'translate3d(0, 100px ,0)',
  });

  const tech = [
    ['React', 'Redux', 'Node', 'Express'],
    ['CSS Modules', 'SASS', 'MongoDB'],
  ];

  console.log(projects[id]);

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
            <animated.span style={transform}>{title}</animated.span>
          </h2>
          <animated.div style={translate} className={styles.projectLower}>
            <p>{projects[id].description}</p>
            <div
              className={styles.divider}
              style={{ backgroundColor: color }}
            />
            <h3>Technologies Used:</h3>
            <div className={styles.techList}>
              {projects[id].tech.map((arr, i) => {
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
              {site && (
                <a href={site} target="_blank" rel="noopener noreferrer">
                  <button className={styles.btn} data-text={'Visit Site'}>
                    <span />
                    <span>Visit Site</span>
                  </button>
                </a>
              )}{' '}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <button className={styles.btn} data-text={'Github'}>
                    <span />
                    <span>Github</span>
                  </button>
                </a>
              )}
            </div>
          </animated.div>
        </div>
        <animated.div style={translate} className={styles.projectImage}>
          <img className={styles[id]} alt={id} />
        </animated.div>
      </div>
    </div>
  );
};

export default Project;
