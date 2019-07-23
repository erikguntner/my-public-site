import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Social from './Social';

import styles from '../stylesheets/Nav.module.scss';

const Nav = ({ pageId, setPage, open, toggle }) => {
  const closeNav = page => {
    if (page !== pageId) {
      toggle(!open);
      setPage(page);
    } else {
      toggle(!open);
    }
  };

  return (
    <div
      className={styles.nav}
      style={{
        transform: open ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
      }}
    >
      <div className={styles.links}>
        <Link to="/">
          <button onClick={() => closeNav(1)}>About Me</button>
        </Link>
        <Link to="/work">
          <button onClick={() => closeNav(1)}>My Work</button>
        </Link>
        <Link to="/contact">
          <button onClick={() => closeNav(1)}>Contact</button>
        </Link>
      </div>
      <Social type="light" align="center" />
    </div>
  );
};

export default Nav;
