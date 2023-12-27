import styles from './Navbar.module.css';
import React from 'react';
import logo from "../../assets/LogoNew.png"
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div className={styles.topnav}>
        <div className={styles.navButtonContainer}>
        </div>
        <div className={styles.navLogoContainer}> 
            <a href='/'><img className={styles.navbarLogo} src={logo}></img> </a>
        </div>
        <div className={styles.navLinksContainer}>
            <Link to='/' className={styles.pageLink}>HOME</Link>
            <Link to='/contact' className={styles.pageLink}>CONTACT</Link>
            <a href='/' className={styles.pageLink}>FAQ</a>
        </div>
    </div>
  );
}

export default Navbar;
