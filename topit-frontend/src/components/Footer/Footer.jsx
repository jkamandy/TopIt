import styles from './Footer.module.css';
import React from 'react';
import logoLight from "../../assets/LogoLight.svg"
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
  

function Footer() {
    const [cameraIsHovered, setCameraIsHovered] = useState(false);

    const cameraIconStyles = {
        color: cameraIsHovered ? '#F46969' : 'white',
        // color: 'white',
        fontSize: '45px',
        marginTop: '10px',
        display: 'flex',
        width: '2rem',
        // justifyContent: ''
        // Add more styles as needed
    };

  return (
    <div className={styles.background}>

        <div className={styles.footerContainer}>
            <div className={styles.socialContainer}>
                <div className={styles.socialContainerInner}>
                    <span className={styles.homeText}>FOLLOW US ON <span className={styles.homeTextRedU}>SOCIAL MEDIA</span></span>
                    <FontAwesomeIcon 
                        icon={faInstagram} 
                        onMouseEnter={() => setCameraIsHovered(true)}
                        onMouseLeave={() => setCameraIsHovered(false)}
                        style={cameraIconStyles}
                    />
                </div>
                
                <div className={styles.socialContainerInner}  style={{marginBottom: '3vh'}}>
                    {/* <a href='/' className={styles.footerPrivacy}>Privacy Policy</a> */}
                    <span className={styles.footerPrivacy}>© 2023 All Rights Reserved | Top It</span>
                </div>
                
            </div>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoLight}></img>
            </div>
        </div>
    </div>
  );
}

export default Footer;
