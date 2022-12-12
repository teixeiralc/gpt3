import React from 'react';
import { Feature } from '../../components';
import featuresData from './featuresData';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={`${styles.features} section__padding`} id="features">
      <div className={styles.heading}>
        <h2 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className={styles.side_features}>
        {featuresData.map(({ id, title, text }) => (
          <Feature key={id} title={title} text={text} row />
        ))}
      </div>
    </section>
  );
};

export default Features;
