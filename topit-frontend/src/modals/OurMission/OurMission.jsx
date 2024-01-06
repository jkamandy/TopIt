import styles from './OurMission.module.css';
import React from 'react';
import logo from "../../assets/LogoNew.png"



function OurMission() {
  return (
    <div className={styles.ourMissionContainer}>
        <div className={styles.ourMissionTextContainer}>
            <span className={styles.homeText}>OUR <span className={styles.homeTextRedU}>MISSION</span></span>
            <br/>
            <span style={{fontSize: '0.5vw', width:'90vw', fontWeight:'300'}} className={styles.homeText}>Top It Detailing brings top-notch interior car cleaning right to your doorstep. We understand life gets busy, so we save you the trip with our fully mobile service that fits into your schedule. Specializing in interiors, we deep dive into every crevice with our expert shampooing for carpets, and our leather care is second to none, ensuring your seats get back their shine and suppleness. Dashboards, consoles, and door panels? We'll get them looking sharp and dust-free. With us, it's not just about a clean car—it's about providing a convenient, affordable service that makes your daily drive a cleaner, more pleasant experience. Let us come to you and transform your car’s interior without you having to move an inch.</span>
        </div>
    </div>
  );
}

export default OurMission;
