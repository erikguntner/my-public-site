import React from 'react';
import PropTypes from 'prop-types';
import styles from '../stylesheets/ButtonLink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonLink = ({ type, title, active, href, icon }) => {
  const btnStyle = {
    link: [styles.link, styles.linkOverlay, styles.linkText],
    btn: [styles.btn, styles.btnOverlay, styles.btnText],
    icon: [styles.btnIcon],
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={btnStyle[type][0]}
      data-text={title}
    >
      {icon ? (
        <FontAwesomeIcon icon={icon} />
      ) : (
        <>
          <span className={btnStyle[type][1]} />
          <span className={btnStyle[type][2]}>{title}</span>
        </>
      )}
    </a>
  );
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  active: PropTypes.bool,
};

export default ButtonLink;
