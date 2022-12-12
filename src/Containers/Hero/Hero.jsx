import React from 'react';
import styles from './Hero.module.css';
import people from '../../assets/img/people.png';
import ai from '../../assets/img/ai.png';

const Hero = () => {
  return (
    <section className={`${styles.hero} section__padding`} id="home">
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className="gradient__text">
            Let’s build something amazing with GPT-3 OpenAI
          </h1>

          <p>
            Build next-gen apps with OpenAI’s powerful models. Access GPT-3,
            which performs a variety of natural language tasks, Codex, which
            translates natural language to code, and DALL·E, which creates and
            edits original images.
          </p>

          <div className={styles.form}>
            <input type="email" placeholder="Your e-mail address" />
            <button type="button">Get Started</button>
          </div>
          <div className={styles.hero_people}>
            <img src={people} alt="People that use our program." />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>

        <div className={styles.hero_img}>
          <img src={ai} alt="GPT-3 OpenAI" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
