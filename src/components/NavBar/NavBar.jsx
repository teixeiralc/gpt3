import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.svg';
import MenuLinks from './MenuLinks';

const NavBar = () => {
  const [mobile, setMobile] = React.useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={styles.links}>
        <MenuLinks />
      </ul>
      <div className={styles.sign_in}>
        <p>
          <a href="#signin">Sign In</a>
        </p>
        <button type="button">Sign Up</button>
      </div>
      <div className={styles.mobileMenu}>
        {mobile ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setMobile(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setMobile(true)} />
        )}
        {mobile && (
          <div className={`${styles.mobileMenu_wrapper} scale-up-center`}>
            <ul className={styles.mobileMenu_links}>
              <MenuLinks />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
