import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.inner_cta}>
        <div className={styles.content}>
          <p>Request Early Access to Get Started</p>
          <h3>Register today & start exploring the endless possiblities.</h3>
        </div>
          <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CallToAction;
