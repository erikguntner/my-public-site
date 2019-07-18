import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../stylesheets/Social.module.scss';

const Social = ({ type, align }) => {
  const style = {
    light: styles.light,
    dark: styles.dark,
  };

  return (
    <div className={styles[align]}>
      <a
        href="https://www.linkedin.com/in/erikguntner/"
        target="_blank"
        rel="noopener noreferrer"
        className={style[type]}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/erikguntner"
        target="_blank"
        rel="noopener noreferrer"
        className={style[type]}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default Social;
