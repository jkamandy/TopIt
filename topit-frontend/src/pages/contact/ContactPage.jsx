import Navbar from '../../components/Navbar/Navbar';
import MyNavbar from '../../components/Navbar/Navbar';
import ContactUs from '../../modals/ContactUs/ContactUs';
import styles from './ContactPage.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';


const ContactPage = () => {
    const [phoneIsHovered, setPhoneIsHovered] = useState(false);
    const [emailIsHovered, setEmailIsHovered] = useState(false);


    const phoneIconStyles = {
        color: phoneIsHovered ? '#F46969' : 'white',
        fontSize: '55px',
      };

    const emailIconStyles = {
    color: emailIsHovered ? '#F46969' : 'white',
    fontSize: '55px',
    // marginTop: '10px'
    // Add more styles as needed
    };

    return (
        <div className={styles.background}>
        <MyNavbar/>
        <div className={styles.redBorder}></div>

        <ContactUs/>
        <div className={styles.phoneEmailContainer}>
            <div className={styles.phoneContainer}>
                <span className={styles.contactText}><span className={styles.contactTextRedU}>CALL</span> US </span>
                <a href={`tel:${9709228693}`}>
                    <FontAwesomeIcon icon={faPhone}
                        onMouseEnter={() => setPhoneIsHovered(true)}
                        onMouseLeave={() => setPhoneIsHovered(false)}
                        style={phoneIconStyles}
                    />
                </a>
            </div>

            <div className={styles.phoneContainer}>
                <span className={styles.contactText}><span className={styles.contactTextRedU}>EMAIL</span> US </span>
                <a href={`mailto:test@example.com`}>
                    <FontAwesomeIcon icon={faEnvelope}
                        onMouseEnter={() => setEmailIsHovered(true)}
                        onMouseLeave={() => setEmailIsHovered(false)}
                        style={emailIconStyles}
                    />
                </a>
            </div>
        </div>

        <div className={styles.redBorder}></div>

        <Footer/>
        </div>
    );
    };

export default ContactPage;