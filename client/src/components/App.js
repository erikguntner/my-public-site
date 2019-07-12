import React, { useState } from 'react';
import Button from './Button';
import RouterLink from './RouterLink';
import ProjectContainer from './ProjectContainer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import styles from '../stylesheets/App.module.scss';

const App = () => {
  const [pageId, setPage] = useState(1);

  return (
    <Router>
      <main className={styles.container}>
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
