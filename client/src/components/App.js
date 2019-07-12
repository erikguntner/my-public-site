import React, { useState } from 'react';
import Button from './Button';
import ProjectContainer from './ProjectContainer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Nav from './Nav';

import styles from '../stylesheets/App.module.scss';

const App = () => {
  const [pageId, setPage] = useState(1);
  const [open, toggle] = useState(false);

  return (
    <Router>
      <main className={styles.container}>
        <Nav pageId={pageId} setPage={setPage} open={open} toggle={toggle} />
        <nav className={styles.nav}>
          <div className={styles.navTitle}>
            <h1>Erik Guntner</h1>
            <h4>
              Software Engineer<span>/</span>LA
            </h4>
            <h1>EG</h1>
          </div>
          <div className={styles.links}>
            <Link to="/">
              <Button
                onClick={() => setPage(1)}
                active={pageId === 1}
                type="nav"
                title="About Me"
              />
            </Link>
            <Link to="/work">
              <Button
                onClick={() => setPage(2)}
                active={pageId === 2}
                type="nav"
                title="My Work"
              />
            </Link>
            <Link to="/contact">
              <Button
                onClick={() => setPage(3)}
                active={pageId === 3}
                type="nav"
                title="Contact"
              />
            </Link>
          </div>
          <button className={styles.menuBtn} onClick={() => toggle(!open)}>
            open
          </button>
        </nav>
        <section className={styles.content}>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={ProjectContainer} />
            <Route path="/" component={AboutMe} />
          </Switch>
        </section>
      </main>
    </Router>
  );
};

export default App;
