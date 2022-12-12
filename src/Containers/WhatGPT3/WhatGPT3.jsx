import React from 'react';
import { Feature } from '../../components';
import styles from './WhatGPT3.module.css';

const WhatGPT3 = () => {
  return (
    <section className="section__padding">
      <div className={`${styles.whatgpt3} `} id="wgpt3">
        <div className={styles.feature}>
          <Feature
            title="What is GPT-3"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
            row
          />
        </div>
        <div className={styles.heading}>
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <a href="#blog">Explore The Library</a>
        </div>
        <div className={styles.card_container}>
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
