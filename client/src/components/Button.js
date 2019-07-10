import React from 'react';
import styles from '../stylesheets/Button.module.scss';

const Button = ({ type, title, onClick }) => {
  const btnStyle = {
    nav: styles.btnNav,
    btn: styles.btn,
  };

  return (
    <button onClick={onClick} className={btnStyle[type]} data-text={title}>
      <span className={styles.btnOverlay} />
      <span className={styles.btnText}>{title}</span>
    </button>
  );
};

export default Button;
