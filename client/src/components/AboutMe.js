import React from 'react';
import styles from '../stylesheets/AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          <span role="img" aria-label="waving emoji">
            👋
          </span>{' '}
          I'm Erik Guntner
        </h1>
        <p>
          I am a software engineer based out of Los Angeles, California. I love
          building full stack applications with intuitive User Experiences. Most
          recently, I worked at Codesmith as a part of their Front End team as
          they rebuilt their platform using React, Redux and Node.
        </p>
        <p>My other hobbies include:</p>
        <div className={styles.hobbies}>
          <ul>
            <li>- Spending long days surfing at San Onofre</li>
            <li>- Running</li>
            <li>- Rock Climbing</li>
          </ul>
          <ul>
            <li>- Consuming Large Quantities of Ramen</li>
            <li>- Amateur Pizza Making</li>
            <li>- Petting pomeranians</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
