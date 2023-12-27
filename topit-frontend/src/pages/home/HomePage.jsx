import styles from './HomePage.module.css';
import React from 'react';

// import logo from "../../assets/LogoNew.png"
import bgImage from "../../assets/bgHome.svg"
// import camryBefore from '../../assets/beforeAfter/camry/before.svg'
// import camryAfter from '../../assets/beforeAfter/camry/after.svg'

// import emailIcon from "../assets/emailIcon.svg"
import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import OurMission from '../../modals/OurMission/OurMission';
import Tiers from '../../modals/Tiers/Tiers';
import TrustedService from '../../modals/TrustedService/TrustedService';
import RequestQuote from '../../modals/RequestQuote/RequestQuote';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
// import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
  


function HomePage() {
  const [imageHeight, setImageHeight] = useState(645.33);
  // const [emailIsHovered, setEmailIsHovered] = useState(false);


  useEffect(() => {
    const updateImageHeight = () => {
      const currentImageHeight = document.getElementById('bgImageHome').height;
      setImageHeight(currentImageHeight);
    };

    // Initial update
    updateImageHeight();

    // Event listener for window resize
    window.addEventListener('resize', updateImageHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateImageHeight);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

 
  return (
    <div className={styles.background}>
        <Navbar/>
        <div className={styles.redBorder}></div>

        
        <div className={styles.homeImageContainer}>
          <div className={styles.homeTextContainer} style={{height: `${imageHeight}px`}}>
            <span className={styles.homeText}>WE STAY</span>
            <span className={styles.homeText}>ON <span style={{textDecoration: 'underline', color: '#F46969'}}>TOP</span></span>
          </div>
          <img id='bgImageHome' className={styles.bgImageHome} src={bgImage}></img>
        </div> 

        <div className={styles.redBorder}></div>

        <RequestQuote/>

        <div className={styles.redBorder}></div>

        <OurMission/>

        {/* <div className={styles.redBorder}></div> */}
        <TrustedService/>

        <Tiers/>

        <QuoteForm/>

        <div className={styles.redBorder}></div>

        <Footer/>
    </div>
  );
}

export default HomePage;
