import React, { useState } from 'react';
import { animated, useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import styles from '../stylesheets/AboutMe.module.scss';

const AboutMe = () => {
  const transform = useSpring({
    from: {
      transform: 'translate3d(0, 100% ,0)',
    },
    to: {
      transform: 'translate3d(0, 0%, 0)',
    },
  });

  const translate = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0, 50px ,0)',
    },
    to: { opacity: 1, transform: 'translate3d(0, 0 ,0)' },
    delay: 500,
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          <span role="img" aria-label="waving emoji">
            👋
          </span>{' '}
          <animated.span style={transform}>I'm Erik Guntner</animated.span>
        </h1>
        <animated.div style={translate}>
          <p>
            I am a Software Engineer based out of Los Angeles, California. I
            love building full stack applications with intuitive User
            Experiences. Most recently I worked at Codesmith as a part of their
            Front End team, rebuilding their platform using React, Redux and
            Node.
          </p>
          <h3>What I use:</h3>
          <p>
            Front End: Javascript, React, Redux, Redux Thunk, Redux Saga, Jest,
            Enzyme, Electron, Webpack, CSS Modules, SCSS, HTML
          </p>
          <p>
            Back End/DB/Hosting: Node, Express, MongoDB, PostGres, Heroku, AWS
            S3
          </p>
          <h3>My other hobbies include:</h3>
          <div className={styles.hobbies}>
            <ul>
              <li>- Long days surfing at San Onofre</li>
              <li>- Running</li>
              <li>- Rock Climbing</li>
            </ul>
            <ul>
              <li>- Consuming Ramen</li>
              <li>- Amateur Pizza Making</li>
              <li>- Petting pomeranians</li>
            </ul>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default AboutMe;
