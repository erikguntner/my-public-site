import React, { useRef } from 'react';
import { useSpring, useTransition, useChain, animated } from 'react-spring';

import styles from '../stylesheets/AnimatedProject.module.scss';

const Project = ({ id, title, openId, color, onClick }) => {
  // const style = useSpring({
  //   flex: id === openId ? 1 : 0
  // });

  // const transition = useTransition(id === openId, null, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 }
  // });

  const springRef = useRef();
  const { flex } = useSpring({
    ref: springRef,
    from: { flex: 0 },
    to: { flex: id === openId ? 1 : 0 },
  });

  const transitionRef = useRef();
  const transition = useTransition(id === openId, null, {
    ref: transitionRef,
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  useChain(
    id === openId ? [springRef, transitionRef] : [transitionRef, springRef],
    [0.0, 0.5]
  );

  return (
    <animated.div
      style={{ backgroundColor: color, flex: flex }}
      className={styles.project}
    >
      <div className={styles.projectTitle} onClick={onClick}>
        <div>+</div>
        <h2>{title}</h2>
      </div>
      <div className={styles.projectContent}>
        {transition.map(
          ({ item, key, props }) =>
            item && (
              <animated.p style={props}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                reiciendis quis mollitia dolorum laboriosam, totam nostrum
                libero a impedit autem dolore tenetur cupiditate, cum ipsum
                maiores non earum soluta similique. Ducimus, dolor est magni
                porro dolorem exercitationem ipsam tempore vero delectus.
                Provident et natus velit corrupti consequatur dicta odit
                blanditiis adipisci, veritatis beatae? Aliquam facilis possimus
                atque hic, dicta vitae! Voluptatibus natus, dignissimos eaque
                mollitia animi libero quae nihil quia quam. Impedit, eligendi!
                Corporis quia reprehenderit dolorum! Iusto totam possimus
                exercitationem magni, nemo minus placeat enim porro mollitia
                esse fugit. Laborum cupiditate dignissimos iusto reiciendis iure
                impedit qui eaque quia esse culpa! Eum placeat qui, porro natus
                quos, accusamus quam error iure adipisci soluta id. Similique
                eligendi nesciunt voluptatum consequatur. Amet numquam tempora
                nulla, dignissimos autem eveniet ab earum voluptatibus illum
                recusandae adipisci suscipit dicta porro saepe, consequuntur,
                tenetur a. Eligendi omnis itaque odio consequatur commodi.
                Eligendi cum eveniet doloremque.
              </animated.p>
            )
        )}
      </div>
    </animated.div>
  );
};

export default Project;
