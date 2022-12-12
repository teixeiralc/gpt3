import React from 'react';
import styles from './Blog.module.css';
import { Article } from '../../components';

import { blog01, blog02, blog03, blog04, blog05 } from './importBlogImages';

const Blog = () => {
  return (
    <section className={`${styles.blog} section__padding`} id="blog">
      <div className={styles.heading}>
        <h2 className="gradient__text">
          A lot is happening,
          <br /> We are blogging about it.
        </h2>
      </div>
      <div className={styles.blog_container}>
        {/* Group A is the first article, occupying a larger area */}
        <ul className={styles.groupA}>
          <Article
            imgSrc={blog01}
            date="Dec 12, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </ul>
        <ul className={styles.groupB}>
          <Article
            imgSrc={blog02}
            date="Dec 12, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgSrc={blog03}
            date="Dec 12, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgSrc={blog04}
            date="Dec 12, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgSrc={blog05}
            date="Dec 12, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </ul>
      </div>
    </section>
  );
};

export default Blog;
