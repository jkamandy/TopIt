import styles from './Tiers.module.css';
import React from 'react';
import logo from "../../assets/LogoNew.png"



function Tiers() {
  return (
    <div className={styles.tiersContainer}>
        <div className={styles.tiersTextContainer}>
            <span className={styles.homeText}>OUR <span className={styles.homeTextRedU}>TIERS</span></span>
            <br/>
            <span style={{fontSize: '20px', width:'90vw', fontWeight:'300'}} className={styles.homeText}>Embark on a journey to pristine interiors with our tailored cleaning services, designed to meet the unique needs of your vehicle. Whether you're seeking a quick refresh or a comprehensive overhaul, our tiered packages offer a range of solutions to bring back the sparkle to your ride. Choose from our <span style={{color:'#F46969'}}>three</span> meticulously crafted tiers:</span>
        </div>
        <br/>
        <div className={styles.individualTiersContainer}>
            <div className={styles.tierContainer}>
                <span className={styles.homeText} style={{fontSize:'80px'}}>TIER <span className={styles.homeTextRedU} style={{fontSize:'80px'}}>1</span></span>
                <span className={styles.subHeading}><span className={styles.subHeadingRedU}>BASIC</span> CLEAN (1 HR)</span>
                <br/>
                <span className={styles.subHeading} style={{fontSize:'15px', fontWeight:'300'}}>STARTING AT <span className={styles.subHeadingRedU} style={{fontSize:'100px'}}>$100</span></span>

                <div className={styles.pricingContainer}>
                    <span className={styles.subHeading} style={{fontSize:'20px', fontWeight:'300'}}>Our Basic Clean is designed for a quick refresh of your vehicle's interior. This service includes thorough vacuuming, carpet and mat cleaning, leather cleaning, and a detailed clean for your dash, door panels, and console. It's perfect for regular maintenance to keep your car looking neat and tidy.</span>
                </div>
                <div style={{bottom:'5vh'}}>
                    <span className={styles.subHeading} style={{fontSize:'12px', fontWeight:'300', opacity: '40%'}}>* Prices may vary depending on vehicle model.</span>
                </div>
            </div>

            <div className={styles.tierContainer}>
                <span className={styles.homeText} style={{fontSize:'80px'}}>TIER <span className={styles.homeTextRedU} style={{fontSize:'80px'}}>2</span></span>
                <span className={styles.subHeading}><span className={styles.subHeadingRedU}>COMPREHENSIVE</span> CLEAN (2 HR)</span>
                <br/>
                <span className={styles.subHeading} style={{fontSize:'15px', fontWeight:'300'}}>STARTING AT <span className={styles.subHeadingRedU} style={{fontSize:'100px'}}>$125</span></span>

                <div className={styles.pricingContainer}>
                    <span className={styles.subHeading} style={{fontSize:'20px', fontWeight:'300'}}>Step up to our Comprehensive Clean for a deeper clean that tackles more stubborn dirt. In addition to all the services in Tier 1, we perform an intensive shampoo for your carpets, mats, and seats, leaving your vehicle spotless and smelling fresh.</span>
                </div>
                <div style={{bottom:'5vh'}}>
                    <span className={styles.subHeading} style={{fontSize:'12px', fontWeight:'300', opacity: '40%'}}>* Prices may vary depending on vehicle model.</span>
                </div>
            </div>
            
            <div className={styles.tierContainer}>
                <span className={styles.homeText} style={{fontSize:'80px'}}>TIER <span className={styles.homeTextRedU} style={{fontSize:'80px'}}>3</span></span>
                <span className={styles.subHeading}><span className={styles.subHeadingRedU}>DEEP</span> CLEAN (3 HR)</span>
                <br/>
                <span className={styles.subHeading} style={{fontSize:'15px', fontWeight:'300'}}>STARTING AT <span className={styles.subHeadingRedU} style={{fontSize:'100px'}}>$150</span></span>

                <div className={styles.pricingContainer}>
                    <span className={styles.subHeading} style={{fontSize:'20px', fontWeight:'300'}}>Our Deep Clean service is the ultimate package for heavily soiled vehicles. This extensive cleaning process includes all the services of Tier 1 and 2, with added attention to detail that will restore your vehicle's interior to a like-new condition. This tier is ideal for vehicles that need extra care and attention to remove deep-set dirt and stains.</span>
                </div>
                <div style={{bottom:'5vh'}}>
                    <span className={styles.subHeading} style={{fontSize:'12px', fontWeight:'300', opacity: '40%'}}>* Prices may vary depending on vehicle model.</span>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Tiers;