/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Feature.module.css';

const Feature = ({ title, text, row }) => {
  return (
    <div className={`${styles.features_container} ${row ? styles.row : ''}`}>
      <div className={styles.title}>
        <div />
        <h1>{title}</h1>
      </div>
      <div className={styles.features_text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
