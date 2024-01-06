import styles from './TrustedService.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import logo from "../../assets/LogoNew.png"



function TrustedService() {

    const trustedServiceCheckIconStyles = {
        color: '#F46969',
        fontSize: '4vw',
      };

    return (
        <div className={styles.trustedServiceContainer}>
            <div className={styles.trustedServiceTextContainer}>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faCheck} style={trustedServiceCheckIconStyles}/>
                    <span className={styles.subHeading} style={{fontSize:'2vw', fontWeight: '600'}}>TRUSTED SERVICE</span>
                </div>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faCheck} style={trustedServiceCheckIconStyles}/>
                    <span className={styles.subHeading} style={{fontSize:'2vw', fontWeight: '600'}}>RELIABLE</span>
                </div>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faCheck} style={trustedServiceCheckIconStyles}/>
                    <span className={styles.subHeading} style={{fontSize:'2vw', fontWeight: '600'}}>PROFESSIONAL</span>
                </div>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faCheck} style={trustedServiceCheckIconStyles}/>
                    <span className={styles.subHeading} style={{fontSize:'2vw', fontWeight: '600'}}>SATISFACTION GUARANTEE</span>
                </div>
            </div>
        </div>
    );
    }

export default TrustedService;
