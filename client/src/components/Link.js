import React from 'react';
import styles from '../stylesheets/Button.module.scss';

const Button = ({ type, title, onClick }) => {
  const linkStyle = {
    link: styles.link,
  };

  return (
    <a className={linkStyle[type]} data-text={title} p>
      <span className={styles.linkOverlay} />
      <span className={styles.linkText}>{title}</span>
    </a>
  );
};

export default Button;
