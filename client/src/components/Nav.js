import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

import styles from '../stylesheets/Nav.module.scss';

const Nav = ({ pageId, setPage, open, toggle }) => {
  const closeNav = page => {
    if (page !== pageId) {
      toggle(!open);
      setPage(page);
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
          <Button
            onClick={() => closeNav(1)}
            active={pageId === 1}
            type="nav"
            title="About Me"
          />
        </Link>
        <Link to="/work">
          <Button
            onClick={() => closeNav(2)}
            active={pageId === 2}
            type="nav"
            title="My Work"
          />
        </Link>
        <Link to="/contact">
          <Button
            onClick={() => closeNav(3)}
            active={pageId === 3}
            type="nav"
            title="Contact"
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
