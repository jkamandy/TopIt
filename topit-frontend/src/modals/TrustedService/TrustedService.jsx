import styles from './TrustedService.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import logo from "../../assets/LogoNew.png"



function TrustedService() {

    const trustedServiceCheckIconStyles = {
        color: '#F46969',
        fontSize: '50px',
      };

    return (
        <div className={styles.trustedServiceContainer}>
            <div className={styles.trustedServiceTextContainer}>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faCheck} style={trustedServiceCheckIconStyles}/>
                    <span className={styles.subHeading} >TRUSTED SERVICE</span>
                </div>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faCheck} style={trustedServiceCheckIconStyles}/>
                    <span className={styles.subHeading} >RELIABLE</span>
                </div>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faCheck} style={trustedServiceCheckIconStyles}/>
                    <span className={styles.subHeading} >PROFESSIONAL</span>
                </div>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faCheck} style={trustedServiceCheckIconStyles}/>
                    <span className={styles.subHeading} >SATISFACTION GUARANTEE</span>
                </div>
            </div>
        </div>
    );
    }

export default TrustedService;
