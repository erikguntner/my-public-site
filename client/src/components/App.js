import React, { useState } from 'react';
import Button from './Button';
import ProjectContainer from './ProjectContainer';
import AboutMe from './AboutMe';
import Contact from './Contact';
import styles from '../stylesheets/App.module.scss';

const App = () => {
  const [pageId, setPage] = useState(1);

  return (
    <main className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navTitle}>
          <h1>Erik Guntner</h1>
          <h4>Software Engineer/LA</h4>
        </div>
        <Button onClick={() => setPage(1)} type={'nav'} title="About Me" />
        <Button onClick={() => setPage(2)} type={'nav'} title="My Work" />
        <Button onClick={() => setPage(3)} type={'nav'} title="Contact" />
      </nav>
      <section className={styles.content}>
        {pageId === 1 && <AboutMe />}
        {pageId === 2 && <ProjectContainer />}
        {pageId === 3 && <Contact />}
      </section>
    </main>
  );
};

export default App;
