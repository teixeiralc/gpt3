import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="section__padding">
      <div className={styles.heading}>
        <h2 className="gradient__text">
          Do you want to step in to the
          <br /> future before others
        </h2>
      </div>

      <div className={styles.btn}>
        <a href="#home">Request Early Access</a>
      </div>

      <div className={styles.footer_links}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb,
            <br /> All Rights Reserved
          </p>
        </div>

        <div className={styles.links}>
          <h4>Links</h4>
          <a href="#footer">Overons</a>
          <a href="#footer">Social Media</a>
          <a href="#footer">Counters</a>
          <a href="#footer">Contact</a>
        </div>

        <div className={styles.links}>
          <h4>Company</h4>
          <a href="#footer">Terms & Conditions</a>
          <a href="#footer">Privacy Policy</a>
          <a href="#footer">Contact</a>
        </div>

        <div className={styles.links}>
          <h4>Get in touch</h4>
          <a href="#footer">
            Crechterwoord K12
            <br /> 182 DK Alknjkcb
          </a>
          <a href="#footer">085-132567</a>
          <a href="#footer">email@email.com</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
