import React from 'react';
import styles from './AboutUs.module.css'; // Importing CSS Module

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.banner}>
        <h1>About Us</h1>
        <p>Welcome to our electronics shop, where quality meets technology.</p>
      </div>
      <div className={styles.aboutContentWrapper}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutSection}>
            <div className={styles.icon}>📱</div>
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
          </div>
          <div className={styles.aboutSection}>
            <div className={styles.icon}>💻</div>
            <h2>Our Vision</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
          </div>
          <div className={styles.aboutSection}>
            <div className={styles.icon}>🔌</div>
            <h2>Our Values</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
