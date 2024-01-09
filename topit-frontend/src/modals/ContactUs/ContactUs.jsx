import styles from './ContactUs.module.css';
import React from 'react';
import logo from "../../assets/LogoNew.png"



function ContactUs() {
  return (
    <div className={styles.contactUsContainer}>
        <div className={styles.contactUsTextContainer}>
            <span className={styles.homeText}>CONTACT <span className={styles.homeTextRedU}>US</span></span>
            <br/>
            <span style={{fontSize: '15px', fontWeight:'300'}} className={styles.homeText}>Have questions about our top-notch interior car cleaning services? Ready to schedule a convenient, on-the-go detailing experience? Feel free to reach out to us at Top It Detailing! We're here to make your car's interior shine, all without you lifting a finger.</span>
            <br/>
            <span style={{fontSize: '15px', fontWeight:'300'}} className={styles.homeText}>Whether you're looking to book an appointment, inquire about our services, or simply want to know more about how we can transform your car's interior, our friendly team is ready to assist you. At Top It Detailing, we bring the cleanliness to you, ensuring your car is not just clean but a joy to drive every day. Contact us today and let us take care of the details!</span>
            <br/>

        </div>
    </div>
  );
}

export default ContactUs;
