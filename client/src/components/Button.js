import React from 'react';
import styles from '../stylesheets/Button.module.scss';

const Button = ({ type, title, onClick, active }) => {
  const btnStyle = {
    nav: [styles.btnNav, styles.btnNavOverlay, styles.btnNavText],
    btn: [styles.btn, styles.btnOverlay, styles.btnText],
    underline: [
      styles.btnUnderline,
      styles.btnUnderlineOverlay,
      styles.btnUnderlineText,
    ],
  };

  return (
    <button onClick={onClick} className={btnStyle[type][0]} data-text={title}>
      <span className={btnStyle[type][1]} />
      <span className={btnStyle[type][2]}>{title}</span>
    </button>
  );
};

export default Button;
