import React from 'react';
import styles from './Possibility.module.css';
import Photo from '../../assets/img/possibility.png';

const Possibility = () => {
  return (
    <section
      className={`${styles.possibility} section__padding`}
      id="possibility"
    >
      <div className={styles.img}>
        <img src={Photo} alt="Possibility" />
      </div>
      <div className={styles.content}>
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p className={styles.desc}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className={styles.cta}>Request Early Access to Get Started</p>
      </div>
    </section>
  );
};

export default Possibility;
