/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Article.module.css';

const Article = ({ imgSrc, imgAlt, date, title }) => {
  return (
    <li className={styles.article}>
      <div className={styles.img}>
        <img src={imgSrc} alt={imgAlt ?? 'Blog'} />
      </div>
      <div className={styles.content}>
        <div>
          <span>{date}</span>
          <h3>{title}</h3>
        </div>
        <a href="#blog">Read Full Article</a>
      </div>
    </li>
  );
};

export default Article;
