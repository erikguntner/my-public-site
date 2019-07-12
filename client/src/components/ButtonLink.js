import React from 'react';
import styles from '../stylesheets/Button.module.scss';

const ButtonLink = ({ type, title, onClick, active, href }) => {
  const btnStyle = {
    link: [styles.link, styles.linkOverlay, styles.linkText],
    btn: [styles.btn, styles.btnOverlay, styles.btnText],
  };

  return (
    <a href={href} className={btnStyle[type][0]} data-text={title}>
      <span className={btnStyle[type][1]} />
      <span className={btnStyle[type][2]}>{title}</span>
    </a>
  );
};

export default ButtonLink;
