import styles from './RequestQuote.module.css';
import React from 'react';

// import logo from "../../assets/LogoNew.png"
import camryBefore from '../../assets/beforeAfter/camry/before.svg'
import camryAfter from '../../assets/beforeAfter/camry/after.svg'

// import emailIcon from "../assets/emailIcon.svg"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

  


function RequestQuote() {
  const [emailIsHovered, setEmailIsHovered] = useState(false);

  const emailIconStyles = {
    color: emailIsHovered ? '#F46969' : 'white',
    fontSize: '55px',
    marginTop: '10px'
  };

  return (

        <div className={styles.requestQuoteContainer}>
          <div className={styles.requestQuote}>
            <span className={styles.homeText} style={{fontSize:'45px'}}>REQUEST A</span>
            <span className={styles.homeText} style={{fontSize:'45px'}}><span style={{textDecoration: 'underline', color: '#F46969'}}>QUOTE</span></span>
            <a href="mailto:topitdetailing@gmail.com" className={styles.emailIcon}>
              <FontAwesomeIcon icon={faEnvelope}
                onMouseEnter={() => setEmailIsHovered(true)}
                onMouseLeave={() => setEmailIsHovered(false)}
                style={emailIconStyles}
              />
            </a>
            <br></br>

            {/* <img id='emailIcon' className={styles.emailIcon} src={emailIcon}></img> */}
          </div>
          <div className={styles.beforeAfter}>
            <div className={styles.imagesContainer}>
              <img src={camryBefore} className={styles.camryBefore}/>
              <img src={camryAfter} className={styles.camryAfter} />
            </div>
            {/* <ImageCarousel imgSources={[{logo}]} /> */}
            <div className={styles.servicesContainer}>
                <div className={styles.services}>
                  <span className={styles.homeText} style={{fontSize:'20px'}}>TIER <span className={styles.homeTextRedU} style={{fontSize:'35px'}}>1</span> - BASIC CLEAN</span>
                  <span className={styles.homeText} style={{fontSize:'20px'}}>TIER <span className={styles.homeTextRedU} style={{fontSize:'35px'}}>2</span> - COMPREHENSIVE CLEAN</span>
                  <span className={styles.homeText} style={{fontSize:'20px'}}>TIER <span className={styles.homeTextRedU} style={{fontSize:'35px'}}>3</span> - DEEP CLEAN</span>
                  <br/>
                </div>
            </div>
          </div>
        </div>
  );
}

export default RequestQuote;
